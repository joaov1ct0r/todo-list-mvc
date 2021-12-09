document.addEventListener("DOMContentLoaded", updateToDo);

function updateToDo() {
    let url = "http://localhost:3000/api/all";

    fetch(url)
        .then(res => {
            let data = res.json();

            console.log(data);

            return data;
        })
        .then(data => {
            let toDoElements = "";

            let toDo = JSON.parse(JSON.stringify(data));

            console.log(toDo);

            toDo.forEach(element => {
                let toDoElement = `<li class="toDoValue" id="${element.id}">
                                        ${element.title}<input class='checkbox' type='checkbox'>
                                    </li>`;

                toDoElements += toDoElement;
            });

            const toDoList = document.getElementById("listItems");

            toDoList.innerHTML = toDoElements;
        });
}

const toDoInput = document.getElementById("toDoInput");

const toDoSubmit = document.getElementById("toDoSubmit");

// toDoSubmit.addEventListener("click", submitToDo);

// function submitToDo() {
//     let inputValue = toDoInput.value;

//     console.log(inputValue);

//     // const url = "http://localhost:3000/api/new";

//     // const options = {
//     //     method: "POST",
//     //     body: JSON.stringify(inputValue),
//     //     headers: { "Content-type": "application/json; charset=UTF-8" }
//     // };

//     fetch("http://localhost:3000/api/new", {
//         method: "POST",
//         body: JSON.stringify(inputValue),
//         headers: { "Content-type": "application/json; charset=UTF-8" }
//     }).then(res => {
//         console.log(res);

//         // updateToDo()

//         toDoInput.value = "";
//     });
// }

// function submittedToDo() {
//     const inputValue = toDoInput.value;

//     if (inputValue === "") {
//         alert("Task não inserida");
//     } else {
//         const toDoReturn = newToDo(inputValue);

//         toDoList.innerHTML =
//             toDoList.innerHTML += `<li class='inputValue'>${toDoReturn.toDo}<input class='checkbox' type='checkbox'></li>`;

//         toDoInput.value = "";
//     }
// }

// function newToDo(value) {
//     return {
//         toDo: value
//     };
// }
