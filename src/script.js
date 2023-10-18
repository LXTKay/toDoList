"use strict";

import createProjectModal from "./projectsInput.js";
import "./style.css";
import { addProject, getProjectsLength, getProjectTitle, replaceProjectArray } from "./projects.js";
import { displayProjects } from "./sidebar.js";
import { loadStorage } from "./storage.js";

document.querySelector("#addButton").addEventListener("click", createProjectModal);

//on startup
if(loadStorage() == null ){
  addProject("default");
} else {
  replaceProjectArray(loadStorage())
};

displayProjects();
