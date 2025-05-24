let input = document.getElementById('inputAdd');
let botao = document.getElementById('btnAdd');
let listaDeTarefas = document.getElementById('listaTarefas');

let contador = 0;

function adicionar() {

    contador++;

    //Pegando o valor do input como STRING.
    let tarefa = String(input.value);

    //SE tarefa não for VAZIO ou NULO ou INDEFINIDO...
    if ((tarefa != '') && (tarefa != null) && (tarefa != undefined)) {

        //Criando o padrão para uma nova terefa.
        let newTarefa = `<section id="${contador}" class="item">
            <div id="item_${contador}" class="item-icone"  onclick="itemClicado(${contador})">
                <span class="material-symbols-outlined">circle</span>
            </div>
            <div class="item-nome" onclick="itemClicado(${contador})">
                ${tarefa}
            </div>
            <div class="item-botao">
                <button id="btnDelete" onclick="deletar(${contador})" ><span class="material-symbols-outlined">delete</span> Deletar</button>
            </div>
        </section>`
        //Adicionado uma nova tarefa.
        listaDeTarefas.innerHTML += newTarefa;
        //Tornando o input vazio ao adicionar uma nova tarefa.
        input.value = '';
        input.focus();
    }
}
//Para adicionar uma tarefa teclando ENTER.
input.addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
        botao.click()
    }
})

function deletar(id) {
    //Pegando o valor da tarefa correta pelo ID: contador.
    let itemDeletado = document.getElementById(id);

    //Deletar tarefa.
    itemDeletado.remove();
}

function itemClicado(id) {
    //Pegando a tarefa correta pelo ID: contador.
    let itemMarcado = document.getElementById(id);
    
    //Pegando o icone da tarefa correta pelo ID: item_contador.
    let icone = document.getElementById('item_'+id);

    //SE o nome da classe for IGUAL a item...
    if (itemMarcado.classList == 'item') {

        //Adicionar .clicado ao nome da classe.
        itemMarcado.classList.add('clicado')

        //Substituir o icone desmarcado por outro marcado.
        icone.innerHTML = `<span class="material-symbols-outlined">select_check_box</span>`;

        //Adicionar a tarefa marcada para o fim da lista.
        listaDeTarefas.appendChild(itemMarcado);
    }
    else {
        //Remover .clicado do nome da classe.
        itemMarcado.classList.remove('clicado')

        //Adicionar icone desmarcado no lugar do marcado.
        icone.innerHTML = `<span class="material-symbols-outlined">circle</span>`;
    }
}