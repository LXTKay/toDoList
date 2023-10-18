"use strict"

import { showToDos } from "./displayToDos";
import { addItem, deleteItem, getProjectItems, replaceItem } from "./projects";
import { currentlySelectedProject } from "./sidebar";
import { Todo } from "./todos";

export function makeEditable(current){
  let firstChild = current.firstChild;
  let nameText = firstChild.innerText;

  let descriptionText = firstChild.nextSibling.innerText;

  let dueDateText = firstChild.nextSibling.nextSibling.innerText;//import

  current.innerText = "";

  let name = document.createElement("input");
  name.type = "text";
  name.defaultValue = nameText;
  current.append(name);

  let description = document.createElement("input");
  description.type = "text";
  description.defaultValue = descriptionText;
  current.append(description);

  let dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.value = getProjectItems(currentlySelectedProject)[current.getAttribute("internalNumber")].dueDate;
  current.append(dueDate);

  //prio
  let priorityInput = document.createElement('select');
  priorityInput.name = 'priority';
  priorityInput.id = 'priority';

  let priorityOption1 = document.createElement("option");
  priorityOption1.innerText = "Low";
  priorityInput.append(priorityOption1);

  let priorityOption2 = document.createElement("option");
  priorityOption2.innerText = "Normal";
  priorityOption2.selected = true;
  priorityInput.append(priorityOption2);

  let priorityOption3 = document.createElement("option");
  priorityOption3.innerText = "High";
  priorityInput.append(priorityOption3);

  priorityInput.value = getProjectItems(currentlySelectedProject)[current.getAttribute("internalNumber")].priority;

  current.append(priorityInput);

  let saveButton = document.createElement("button");
  saveButton.innerText = "Save Changes";
  saveButton.addEventListener("click", (e) =>{
    //save changes.
    replaceItem(currentlySelectedProject, current.getAttribute("internalNumber"), new Todo(name.value, description.value, dueDate.value, priorityInput.value));
    //reload items.
    showToDos(getProjectItems(currentlySelectedProject));
  });
  current.append(saveButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", e => {
    deleteItem(currentlySelectedProject, current.getAttribute("inernalNumber"));
    showToDos(getProjectItems(currentlySelectedProject));
  });

  current.append(deleteButton);
}