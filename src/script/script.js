const toDoInput = document.getElementById("toDoInput");

const toDoSubmit = document.getElementById("toDoSubmit");

const toDoList = document.getElementById("listItems");

toDoSubmit.addEventListener("click", submittedToDo);

function submittedToDo() {
    const inputValue = toDoInput.value;

    if (inputValue === "") {
        alert("Task não inserida");
    } else {
        const toDoReturn = newToDo(inputValue);

        toDoList.innerHTML =
            toDoList.innerHTML += `<li class='toDoValue'>${toDoReturn.toDo}<input class='checkbox' type='checkbox'></li>`;

        toDoInput.value = "";
    }
}

function newToDo(value) {
    return {
        toDo: value
    };
}
