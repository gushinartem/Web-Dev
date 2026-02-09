"use strict";

const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const footerContainer = document.getElementById("footerContainer");

addButton.addEventListener("click", function() {
    if (inputField.value.trim() === "") {
        alert("Please enter the task.");
        return;
    }
    const newDiv = document.createElement("div");
    const checkAndTextDiv = document.createElement("div");
    const deletionDiv = document.createElement("div");
    const checkBox = document.createElement("input");
    const taskText = document.createElement("p");
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("img");

    newDiv.classList.add("taskCard");
    
    checkAndTextDiv.classList.add("checkAndTextDiv");

    checkBox.type = "checkbox";
    taskText.textContent = inputField.value;
    inputField.value = "";
    taskText.style.marginLeft = "40px";


    deletionDiv.classList.add("deletionDiv");

    deleteIcon.src = "delete.png";
    deleteIcon.alt = "Delete Icon";
    deleteIcon.width = 20;
    deleteIcon.height = 20;

    deleteButton.classList.add("deletionButton");
    deleteButton.appendChild(deleteIcon);

    
    
    deletionDiv.appendChild(deleteButton);
    checkAndTextDiv.appendChild(checkBox);
    checkAndTextDiv.appendChild(taskText);
    

    newDiv.appendChild(checkAndTextDiv);
    newDiv.appendChild(deletionDiv);

    footerContainer.appendChild(newDiv);
});


footerContainer.addEventListener("click", function(e){
    const btn = e.target.closest(".deletionButton");
    if(!btn)return;
    const card = btn.closest(".taskCard");
    if(!card)return;
    card.classList.add("removing");
    setTimeout(() => {
        card.remove();
    },500);
});

footerContainer.addEventListener("change", function(e){
    if(e.target.matches('input[type="checkbox"]')){
        const card = e.target.closest(".taskCard");
        if(e.target.checked){
            
            card.style.border="1px solid green";
        }
        else{
            card.style.border="1px solid rgb(215, 215, 215)";
        }
    }
    else{return;}
});