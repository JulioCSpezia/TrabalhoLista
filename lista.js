const nameList = ["wats", "Igor", "Fernandão Back", "Fahur", "Helena", "Jorge", "Paulo", "José"]


const botaofiltrar = document.getElementById("Filtrar");
const botaoadicionar= document.getElementById("adicionar");
const botaoremover = document.getElementById("remover");
const saida = document.getElementById("saida");
const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");


this.filtLista();

function filtLista(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    filtLista(filteredList);
}

botaofil.addEventListener("click", inputHandler);

function adicionarNome(){
    nome = searchField.value.toLowerCase(); 
    if (nome != ''){
        if (nameList.indexOf(nome) == -1){
          
            nameList.push(nome);
            saida.innerHTML = "Nome Inserido: " + nome;
        } else {
            saida.innerHTML = "nome existente: "
        }
    
    } else {
        saida.innerHTML = "Insira um nome valido: "
    }

}

botaoadd.addEventListener("click", adicionarNome);


function removerNome(){
    nome = searchField.value.toLowerCase();

    var index = nameList.indexOf(nome);
    if (index > -1) {
        nameList.splice(index, 1);
        saida.innerHTML = "Nome removido: " + nome;
      } else {
        saida.innerHTML = 'Não foi possivel fazer a pesquisa "' + nome + '"'
      }
    
}

botaorem.addEventListener("click",removerNome)