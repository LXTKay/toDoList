"use strict";

import { makeEditable } from "./todosEdit";
import { createTodoModal } from "./todosInput";

export function showToDos(arr){
  let cW = document.getElementById("contentWindow");
  cW.innerText = "";

  let addButton = document.createElement("div");
  addButton.innerText = "+";
  addButton.classList += "addToDo";
  addButton.addEventListener("click", createTodoModal); //e.target.dataset.position;
  cW.append(addButton);
  let internalNumber = 0;

  arr.forEach(e => {
    let currentToDo = document.createElement("div");
    currentToDo.setAttribute("internalNumber", internalNumber);
    internalNumber++;
    currentToDo.classList += "toDoItem";
    
    if(e.priority == "Low"){
      currentToDo.style.backgroundColor = "green";
    } else if(e.priority == "High"){
      currentToDo.style.backgroundColor = "red";
    };

    let title = document.createElement("div");
    title.innerText = e.title;

    let description = document.createElement("div");
    description.innerText = e.description;

    let dueDate = document.createElement("div");
    dueDate.innerText = "Due: " + e.dueDate;

    currentToDo.append(title);
    currentToDo.append(description);
    currentToDo.append(dueDate);

    currentToDo.addEventListener("click", function editEvent(){
      currentToDo.removeEventListener("click", editEvent);
      makeEditable(currentToDo);
    });

    cW.append(currentToDo);
  });
};