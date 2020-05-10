"use srict";
const box = document.querySelector(".box");
const contextmenu = document.querySelector(".contextmenu");
const newLi = document.querySelector(".new");
const create = document.querySelector(".create");
const cancel = document.querySelector(".cancel");
const createBTN = document.querySelector("#create");
const Input = document.querySelector(".input");
box.oncontextmenu= function(e){
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    contextmenu.classList.remove("d-none");
    let left = parseFloat(getComputedStyle(contextmenu).left);
    let top = parseFloat(getComputedStyle(contextmenu).top);
    top = y+"px";
    left= x+"px";
    contextmenu.style.left=left;
    contextmenu.style.top=top;
    newLi.onclick = function(){
        contextmenu.classList.add("d-none");
        create.classList.remove("d-none");
        cancel.onclick= function(){
            create.classList.add("d-none");
        }
        createBTN.onclick=function(){
            create.classList.add("d-none");
          let newFolder = document.createElement("div");
        newFolder.classList.add("newFolder");
        newFolder.innerHTML=" <i class='fas fa-folder'></i>"+Input.value.trim();
        box.appendChild(newFolder);
        
        }
    }
    
}
