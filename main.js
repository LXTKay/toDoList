(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body{\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: Helvetica, sans-serif, Arial;\n\n  display: flex;\n  flex-direction: column;\n}\n\nbutton{\n  border: 2px solid black;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n.header{\n  background-color: red;\n  height: 5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.body{\n  flex-grow: 1;\n  background-color: aqua;\n\n  display: flex;\n}\n\n.sidebar{\n  width: 20rem;\n  background-color: beige;\n\n  padding: 1rem;\n}\n\n.sidebarHead{\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#addButton{\n  border: 2px solid black;\n  cursor: pointer;\n  padding: 1rem;\n}\n\n.sidebarBody{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.projectButton{\n  border: 2px solid black;\n  cursor: pointer;\n  text-align: center;\n  padding: 1rem;\n  margin: 1rem;\n  overflow-wrap: break-word;\n}\n\n.contentWindow{\n  flex-grow: 1;\n  background-color: coral;\n\n  display: grid;\n  grid-template-columns: repeat(4, minmax(18rem, 1fr));\n  grid-template-rows: repeat(auto-fit, 20rem);\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.addToDo{\n  background-color: gray;\n  font-size: 15rem;\n  font-weight: bold;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 18rem;\n  height: 20rem;\n}\n\n.toDoItem{\n  background-color: white;\n  width: 18rem;\n  height: 20rem;\n  overflow-wrap: break-word;\n}\n",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],d=r.base?c[0]+r.base:c[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var s=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==s)t[s].references++,t[s].updater(m);else{var f=o(m,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){localStorage.setItem("projectsStored",JSON.stringify(e))}function t(){return localStorage.getItem("projectsStored")?JSON.parse(localStorage.getItem("projectsStored")):null}class r{constructor(e){this.title=e,this.items=[]}}let o=[];function a(t){o.push(new r(t)),e(o)}function i(){return o.length}function l(e){return o[e].items}class c{constructor(e,t,n,r){this.title=e,this.description=t,this.dueDate=n,this.priority=r}creationDate=new Date}function d(){let t=document.createElement("dialog");const n=document.createElement("h3");n.innerText="Create new Todo:",t.append(n);let r=document.createElement("form");r.method="dialog";let a=document.createElement("label");a.htmlFor="title",a.textContent="Title: ";let i=document.createElement("input");i.type="text",i.style.fontSize="2rem",i.name="title",i.id="title";let d=document.createElement("label");d.htmlFor="description",d.textContent="Description: ";let s=document.createElement("input");s.type="text",s.style.fontSize="2rem",s.name="description",s.id="description";let m=document.createElement("label");m.htmlFor="dueDate",m.textContent="Due Date: ";let f=document.createElement("input");f.type="date",f.style.fontSize="2rem",f.name="dueDate",f.id="dueDate";let v=document.createElement("label");v.htmlFor="priority",v.textContent="Priority: ";let g=document.createElement("select");g.style.fontSize="2rem",g.name="priority",g.id="priority";let y=document.createElement("option");y.innerText="Low",g.append(y);let h=document.createElement("option");h.innerText="Normal",h.selected=!0,g.append(h);let b=document.createElement("option");b.innerText="High",g.append(b);let x=document.createElement("button");x.type="submit",x.textContent="Submit",x.addEventListener("click",(n=>{n.preventDefault();let r=i.value,a=s.value,d=f.value,m=g.value;var v,y;v=p,y=new c(r,a,d,m),o[v].items.push(y),e(o),function(e){e.close(),e.remove()}(t),u(l(p))}));let E=document.createElement("div");E.append(a),E.append(i);let T=document.createElement("div");T.append(d),T.append(s);let w=document.createElement("div");w.append(m),w.append(f);let C=document.createElement("div");C.append(v),C.append(g),r.append(E),r.append(T),r.append(w),r.append(C),r.append(x),t.append(r),document.body.append(t),function(e){e.showModal()}(t)}function u(t){let n=document.getElementById("contentWindow");n.innerText="";let r=document.createElement("div");r.innerText="+",r.classList+="addToDo",r.addEventListener("click",d),n.append(r);let a=0;t.forEach((t=>{let r=document.createElement("div");r.setAttribute("internalNumber",a),a++,r.classList+="toDoItem","Low"==t.priority?r.style.backgroundColor="green":"High"==t.priority&&(r.style.backgroundColor="red");let i=document.createElement("div");i.innerText=t.title;let d=document.createElement("div");d.innerText=t.description;let s=document.createElement("div");s.innerText="Due: "+t.dueDate,r.append(i),r.append(d),r.append(s),r.addEventListener("click",(function t(){r.removeEventListener("click",t),function(t){let n=t.firstChild,r=n.innerText,a=n.nextSibling.innerText;n.nextSibling.nextSibling.innerText,t.innerText="";let i=document.createElement("input");i.type="text",i.defaultValue=r,t.append(i);let d=document.createElement("input");d.type="text",d.defaultValue=a,t.append(d);let s=document.createElement("input");s.type="date",s.value=l(p)[t.getAttribute("internalNumber")].dueDate,t.append(s);let m=document.createElement("select");m.name="priority",m.id="priority";let f=document.createElement("option");f.innerText="Low",m.append(f);let v=document.createElement("option");v.innerText="Normal",v.selected=!0,m.append(v);let g=document.createElement("option");g.innerText="High",m.append(g),m.value=l(p)[t.getAttribute("internalNumber")].priority,t.append(m);let y=document.createElement("button");y.innerText="Save Changes",y.addEventListener("click",(n=>{var r,a,f;r=p,a=t.getAttribute("internalNumber"),f=new c(i.value,d.value,s.value,m.value),o[r].items[a]=f,e(o),u(l(p))})),t.append(y);let h=document.createElement("button");h.innerText="Delete",h.addEventListener("click",(n=>{var r,a;r=p,a=t.getAttribute("inernalNumber"),o[r].items.splice(a,1),e(o),u(l(p))})),t.append(h)}(r)})),n.append(r)}))}let p=null;function s(){document.getElementById("sidebarBody").innerText="";for(let e=0;e<i();e++){let t=document.createElement("div");t.innerText=o[e].title,t.classList+="projectButton",t.dataset.position=e,t.addEventListener("click",(e=>{p=e.target.dataset.position;let t=l(+e.target.dataset.position);document.querySelectorAll(".projectButton").forEach((e=>{"Delete Project"!=e.innerText&&(e.style.backgroundColor="")})),e.target.style.backgroundColor="white",u(t)})),document.getElementById("sidebarBody").append(t)}let t=document.createElement("div");t.innerText="Delete Project",t.classList+="projectButton",t.style.backgroundColor="orange",t.addEventListener("click",(()=>{var t;null==p||i()<=1||(t=p,o.splice(t,1),e(o),s(),u(l(0)))})),document.getElementById("sidebarBody").append(t)}var m,f=n(379),v=n.n(f),g=n(795),y=n.n(g),h=n(569),b=n.n(h),x=n(565),E=n.n(x),T=n(216),w=n.n(T),C=n(589),S=n.n(C),k=n(426),D={};D.styleTagTransform=S(),D.setAttributes=E(),D.insert=b().bind(null,"head"),D.domAPI=y(),D.insertStyleElement=w(),v()(k.Z,D),k.Z&&k.Z.locals&&k.Z.locals,document.querySelector("#addButton").addEventListener("click",(function(){let e=document.createElement("dialog");const t=document.createElement("h3");t.innerText="Create new Project:",e.append(t);let n=document.createElement("form");n.method="dialog";let r=document.createElement("label");r.htmlFor="title",r.textContent="Title: ";let o=document.createElement("input");o.type="text",o.style.fontSize="2rem",o.name="title",o.id="title";let i=document.createElement("button");i.type="submit",i.textContent="Submit",i.addEventListener("click",(t=>{t.preventDefault(),a(o.value),function(e){e.close(),e.remove()}(e),s()})),n.appendChild(r),n.appendChild(document.createElement("br")),n.appendChild(o),n.appendChild(document.createElement("br")),n.appendChild(i),e.append(n),document.body.append(e),function(e){e.showModal()}(e)})),null==t()?a("default"):(m=t(),o=m,e(o)),s()})()})();