"use strict";

export function saveStorage(itemToSave){
  localStorage.setItem("projectsStored", JSON.stringify(itemToSave));
};

export function loadStorage(){
  if(!localStorage.getItem("projectsStored")) return null;
  return JSON.parse(localStorage.getItem("projectsStored"));
}