var taskArray=[]
var compTaskArray=[]
var inputText = document.querySelector("#inputText")
var addButton = document.querySelector("#addButton")
var unorderList = document.querySelector("#taskGiven")
var unorderListCompleted = document.querySelector("#completedTask")

addButton.addEventListener("click",()=>{
    alert(inputText.value)
    text = inputText.value;
    taskArray.push(text)
    unorderList.innerHTML = "";
    taskArray.forEach(element => {
        addListElement(element)
    });
})

function addListElement(textElement){
    var divForList = document.createElement("div")
    var liForList = document.createElement("li")
    var spanForList = document.createElement("span")
    var checkButton = document.createElement("button")
    checkButton.innerText="Check"
    var deleteButton = document.createElement("button")
    deleteButton.innerText="Delete"

    spanForList.textContent=textElement

    liForList.appendChild(spanForList)
    liForList.appendChild(checkButton)
    liForList.appendChild(deleteButton)

    divForList.appendChild(liForList)

    unorderList.appendChild(divForList)

    checkButton.addEventListener("click", () => {
        text = textElement;
        compTaskArray.push(text);
        addCompListElement(text);
        taskArray = taskArray.filter(task => task !== text)
        unorderList.innerHTML = "";
        taskArray.forEach(element => {
            addListElement(element)
        });
    })

    deleteButton.addEventListener("click", () => {
        text = textElement;
        taskArray = taskArray.filter(task => task !== text)
        unorderList.innerHTML = "";
    })
}

function addCompListElement(textElement){
    var divForList = document.createElement("div")
    var liForList = document.createElement("li")
    var spanForList = document.createElement("span")
    var deleteButton = document.createElement("button")
    deleteButton.innerText="Delete"

    spanForList.textContent=textElement;

    liForList.appendChild(spanForList)
    liForList.appendChild(deleteButton)
    divForList.appendChild(liForList)
    unorderListCompleted.appendChild(divForList)

    deleteButton.addEventListener("click", () => {
        text = textElement;
        compTaskArray = compTaskArray.filter(task => task !== text)
        unorderListCompleted.innerHTML = "";
    })
}