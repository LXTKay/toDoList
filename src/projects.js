"use strict";

import { saveStorage } from "./storage";

class Project {
  constructor(title){
    this.title = title;
    this.items = [];
  };
};

let projects = [];

export function addProject(title){
  projects.push(new Project(title));
  saveStorage(projects);
};

export function getProjectsLength(){
  return projects.length;
};

export function getProjectTitle(num){
  return projects[num].title;
};

export function getProjectItems(num){
  return projects[num].items;
};

export function addItem(num, item){
  projects[num].items.push(item);
  saveStorage(projects);
};

export function deleteItem(projectNr, itemPos){
  projects[projectNr].items.splice(itemPos, 1);
  saveStorage(projects);
};

export function replaceItem(projectNr, itemPos, newItem){
  projects[projectNr].items[itemPos] = newItem;
  saveStorage(projects);
};

export function deleteProject(projectNr){
  projects.splice(projectNr, 1);
  saveStorage(projects);
};

export function replaceProjectArray(arr){
  projects = arr;
  saveStorage(projects);
};