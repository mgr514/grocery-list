const groceries = document.getElementsByClassName ("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    var editButton = document.createElement("button")
    editButton.innerHTML = "Edit";

    editButton.addEventListener("click", function(){
        h2. 
    });
     //no idea what to do next, I broke the code. Maybe another userInput?

    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", function(){
        h2.remove();
    });

    h2.appendChild(editButton);

    h2.appendChild(deleteButton);

    h2.addEventListener("click",function(){
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}