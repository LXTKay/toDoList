"use strict";

import { addProject } from "./projects";
import { displayProjects } from "./sidebar";

function openModal(dialog){
  dialog.showModal();
};

function closeModal(dialog){
  dialog.close();
  dialog.remove();
};

function returnInput(input){
  return input.value;
};

export default function createProjectModal(){
  let dialog = document.createElement("dialog");
  const HEADLINE = document.createElement("h3");
  HEADLINE.innerText = "Create new Project:";
  dialog.append(HEADLINE);

  let form = document.createElement('form');
  form.method = 'dialog';

  // Create the label for the title input
  let titleLabel = document.createElement('label');
  titleLabel.htmlFor = 'title';
  titleLabel.textContent = 'Title: ';

  // Create the title input field
  let titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.style.fontSize = "2rem";
  titleInput.name = 'title';
  titleInput.id = 'title';

  // Create the submit button
  let submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  //functionality Submit button
  submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    addProject(returnInput(titleInput));
    closeModal(dialog);
    displayProjects();
  });

  // Append the label, input, and button to the form
  form.appendChild(titleLabel);
  form.appendChild(document.createElement('br'));
  form.appendChild(titleInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitButton);

  dialog.append(form);
  document.body.append(dialog);

  openModal(dialog);
};