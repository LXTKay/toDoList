"use strict";

import { showToDos } from "./displayToDos";
import { getProjectTitle, getProjectsLength, getProjectItems, deleteProject } from "./projects"

export let currentlySelectedProject = null;

export function displayProjects(){
  document.getElementById("sidebarBody").innerText = "";
  for(let i = 0; i < getProjectsLength(); i++){
    let currentProject = document.createElement("div");
    currentProject.innerText = getProjectTitle(i);
    currentProject.classList += "projectButton";
    currentProject.dataset.position = i;
    currentProject.addEventListener("click", (e)=>{
      currentlySelectedProject = e.target.dataset.position;
      let pos = e.target.dataset.position;
      let itemSet = getProjectItems(+pos);
      document.querySelectorAll(".projectButton").forEach(val =>{
        if(val.innerText == "Delete Project") return;
        val.style.backgroundColor = "";
      });
      e.target.style.backgroundColor = "white";
      showToDos(itemSet);
    });
    document.getElementById("sidebarBody").append(currentProject);
  };
  let deleteProjectButton = document.createElement("div");
  deleteProjectButton.innerText = "Delete Project";
  deleteProjectButton.classList += "projectButton";
  deleteProjectButton.style.backgroundColor = "orange";
  deleteProjectButton.addEventListener("click", ()=> {
    if(currentlySelectedProject == null || getProjectsLength() <= 1) return;
    deleteProject(currentlySelectedProject);

    displayProjects();

    showToDos(getProjectItems(0));
  })
  document.getElementById("sidebarBody").append(deleteProjectButton);
};