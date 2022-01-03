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

    const url = 'http://localhost:3001/api/new';

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
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;

        const li = button.parentNode;

        const ul = li.parentNode;

        if (button.textContent == 'Remover') {
            const url = `http://localhost:3001/api/delete/${li.id}`;

            const options = {
                method: 'DELETE',
                body: null,
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            };

            fetch(url, options).then(res => {
                console.log(res);
            });

            ul.removeChild(li);

            updateToDo();
        } else if (button.textContent == 'Editar') {
        }
    }
});
