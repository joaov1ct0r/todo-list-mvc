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
    let toDoInput = document.getElementById('toDoInput');

    let title = toDoInput.value;

    const url = 'http://localhost:3000/api/new';

    const options = {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    };

    const response = await fetch(url, options);

    if(response.status === 200) {
        toDoInput.value = '';

        alert('Tarefa enviado com sucesso!')

        updateToDo();
    } else {
        toDoInput.value = '';

        alert('Falha ao enviar tarefa')
    }
});

const toDoList = document.getElementById('listItems');

toDoList.addEventListener('click', async event => {
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

            const response = await fetch(url, options);

            if(response.status === 200) {
                ul.removeChild(li);

                alert('Tarefa deletada com sucessso!')

                updateToDo();
            } else alert('Falha ao deletar tarefa!')

            
        } else if (button.textContent === 'Editar') {
            let input = document.createElement('input');

            input.type = 'text';

            input.value = '';

            input.classList.add('editInput');

            li.insertBefore(input, li.lastChild);

            button.textContent = 'Salvar';

            button.addEventListener('click', async () => {
                const url = `http://localhost:3000/api/edit/${li.id}`;

                const title = input.value;

                const options = {
                    method: 'PUT',
                    body: JSON.stringify({ title }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                };

                const response = await fetch(url, options);

                if(response.status === 200) {
                    alert('Tarefa editada com sucesso!');

                    updateToDo();
                } else {
                    alert('Falha ao editar tarefa!')
                } 
            });
        }
    }
});
