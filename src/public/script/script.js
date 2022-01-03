document.addEventListener('DOMContentLoaded', updateToDo);

function updateToDo() {
    let url = 'http://localhost:3001/api/all';

    fetch(url)
        .then(res => {
            let data = res.json();

            console.log(data);

            return data;
        })
        .then(data => {
            let toDoElements = '';

            let toDo = JSON.parse(JSON.stringify(data));

            console.log(toDo);

            toDo.forEach(element => {
                let toDoElement = `<li class="toDoValue" id="${element.toDoID}">
                                    ${element.toDo}<button>Editar</button><button>Remover</button>
                                  </li>`;

                toDoElements += toDoElement;
            });

            const toDoList = document.getElementById('listItems');

            toDoList.innerHTML = toDoElements;
        });
}

const toDoSubmit = document.getElementById('toDoSubmit');

toDoSubmit.addEventListener('click', submitToDo);

function submitToDo() {
    let toDoInput = document.getElementById('toDoInput');

    let title = toDoInput.value;

    console.log(title);

    const url = 'http://localhost:3000/api/new';

    const options = {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    fetch(url, options).then(res => {
        console.log(res);

        updateToDo();

        toDoInput.value = '';
    });
}

const toDoList = document.getElementById('listItems');

toDoList.addEventListener('click', event => {
    if (event.target.tagName === 'INPUT') {
        const checkbox = event.target;

        const li = checkbox.parentNode;

        const ul = li.parentNode;

        for (let index in checkbox) {
            if (checkbox[index].checked === true) {
                ul.removeChild(li[index]);
            }
        }
    }
});
