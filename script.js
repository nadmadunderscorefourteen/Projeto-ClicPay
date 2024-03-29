const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes");

listaOpcoes.addEventListener("click", identificarOpcoes);

function identificarOpcoes(event){
   
    const elemento = event.target;

    if(elemento.tagName == "LI"){
    
        const id = elemento.id;

        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`);

        removeClasseMostrar();
      
        secaoEscolha.classList.add("mostrar");

        addClasseMostrar();
        
    }
}

function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div");
    
    for(let i=0; i < divs.length; i++){
        
        divs[i].classList.remove("mostrar");
    }
}

function addClasseMostrar(){
    const divsSon = document.querySelectorAll(".secaoTransacao__boxOpcao");
    
    for(let i=0; i < divsSon.length; i++){
        
        divsSon[i].classList.add("mostrar");
    }
}