"use strict";

import { showToDos } from "./displayToDos";
import { addItem, getProjectItems } from "./projects";
import { currentlySelectedProject } from "./sidebar";
import { Todo } from "./todos";

function openModal(dialog){
  dialog.showModal();
};

function closeModal(dialog){
  dialog.close();
  dialog.remove();
};

export function createTodoModal(){
  let dialog = document.createElement("dialog");
  const HEADLINE = document.createElement("h3");
  HEADLINE.innerText = "Create new Todo:";
  dialog.append(HEADLINE);

  let form = document.createElement('form');
  form.method = 'dialog';

  let titleLabel = document.createElement('label');
  titleLabel.htmlFor = 'title';
  titleLabel.textContent = 'Title: ';
  let titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.style.fontSize = "2rem";
  titleInput.name = 'title';
  titleInput.id = 'title';

  let descriptionLabel = document.createElement('label');
  descriptionLabel.htmlFor = 'description';
  descriptionLabel.textContent = 'Description: ';
  let descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.style.fontSize = "2rem";
  descriptionInput.name = 'description';
  descriptionInput.id = 'description';

  let dueDateLabel = document.createElement('label');
  dueDateLabel.htmlFor = 'dueDate';
  dueDateLabel.textContent = 'Due Date: ';
  let dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.style.fontSize = "2rem";
  dueDateInput.name = 'dueDate';
  dueDateInput.id = 'dueDate';

  let priorityLabel = document.createElement('label');
  priorityLabel.htmlFor = 'priority';
  priorityLabel.textContent = 'Priority: ';
  let priorityInput = document.createElement('select');
  priorityInput.style.fontSize = "2rem";
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

  // Create the submit button
  let submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  //functionality Submit button
  submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let title = titleInput.value;
    let description = descriptionInput.value;
    let dueDate = dueDateInput.value;
    let priority = priorityInput.value;

    addItem(currentlySelectedProject, new Todo(title, description, dueDate, priority));
    closeModal(dialog);
    showToDos(getProjectItems(currentlySelectedProject));
  });
  
  //append all shit
  let titleConatiner = document.createElement("div");
  titleConatiner.append(titleLabel);
  titleConatiner.append(titleInput);

  let descriptionContainer = document.createElement("div");
  descriptionContainer.append(descriptionLabel);
  descriptionContainer.append(descriptionInput);

  let dueDateContainer = document.createElement("div");
  dueDateContainer.append(dueDateLabel);
  dueDateContainer.append(dueDateInput);

  let priorityContainer = document.createElement("div");
  priorityContainer.append(priorityLabel);
  priorityContainer.append(priorityInput);

  form.append(titleConatiner);
  form.append(descriptionContainer);
  form.append(dueDateContainer);
  form.append(priorityContainer);
  form.append(submitButton);

  dialog.append(form);
  document.body.append(dialog)
  openModal(dialog);
};