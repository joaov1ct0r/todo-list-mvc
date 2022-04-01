document.addEventListener('DOMContentLoaded', async () => {
    updateToDo()
});

function updateToDo() {
    let url = 'http://localhost:3000/api/all';

    const response = await fetch(url);

    const data = await response.json();

    let toDoElements = '';

    let toDo = JSON.parse(JSON.stringify(data));

    toDo.forEach(element => {
        let toDoElement = `<li class="toDoValue" id="${element.toDoID}">
        ${element.toDo}<button>Editar</button><button>Remover</button>
        </li>`;

        toDoElements += toDoElement;
    });

    const toDoList = document.getElementById('listItems');

    toDoList.innerHTML = toDoElements;
}

const toDoSubmit = document.getElementById('toDoSubmit');

toDoSubmit.addEventListener('click', async () => {

});

function submitToDo() {
    let toDoInput = document.getElementById('toDoInput');

    let title = toDoInput.value;

    const url = 'http://localhost:3000/api/new';

    const options = {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    const response = await fetch(url, options);

    toDoInput.value = '';

    updateToDo();
}

const toDoList = document.getElementById('listItems');

toDoList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;

        const li = button.parentNode;

        const ul = li.parentNode;

        if (button.textContent === 'Remover') {
            const url = `http://localhost:3000/api/delete/${li.id}`;

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
        } else if (button.textContent === 'Editar') {
            let input = document.createElement('input');

            input.type = 'text';

            input.value = '';

            input.classList.add('editInput');

            li.insertBefore(input, li.lastChild);

            button.textContent = 'Salvar';

            button.addEventListener('click', () => {
                editToDo();
            });

            function editToDo() {
                const url = `http://localhost:3000/api/edit/${li.id}`;

                const title = input.value;

                const options = {
                    method: 'PUT',
                    body: JSON.stringify({ title }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                };

                fetch(url, options).then(res => {
                    console.log(res);

                    updateToDo();
                });
            }
        }
    }
});
