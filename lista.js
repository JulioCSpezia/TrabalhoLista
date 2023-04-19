const nameList = ["wats", "Igor", "Fernandão Back", "Fahur", "Helena", "Jorge", "Paulo", "José"]


const botaofiltrar = document.getElementById("Filtrar");
const botaoadicionar= document.getElementById("adicionar");
const botaoremover = document.getElementById("remover");
const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");
const botaoseleciona = document.getElementById("selecionar");

var selecionar = 0;

this.filtLista();

function filtLista(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");

        if (selecionar == i){
            listItems.className = "alert alert-success";
        } else{
            listItems.className = "";
        }
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    filtLista(filteredList);
}

botaofiltrar.addEventListener("click", inputHandler);

function adicionarNome(){
    nome = searchField.value.toLowerCase(); 
    if (nome != ''){
        if (nameList.indexOf(nome) == -1){
          
            nameList.push(nome);
            alert("nome inserido")
        } else {
            alert("nome existente")
        }
    
    } else {
        alert("nome invalido")
    }

}

botaoadicionar.addEventListener("click", adicionarNome);


function removerNome(){
    nameList.splice(selecionar , 1);
    alert("nome removido")
    
}

botaoremover.addEventListener("click",removerNome)

function seleciona(){
    if (nameList.length == 0) {
        alert("Não há nomes para selecionar")      
        return                                        
      }
    if (selecionar > nameList.length -2){
        selecionar = 0
    }
    else{
        selecionar++;
    }
    inputHandler()
    


    }

botaoseleciona.addEventListener("click", seleciona);