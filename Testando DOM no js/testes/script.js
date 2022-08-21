const tintas = document.querySelector('[data-tintas]');
const lista = document.querySelector('.lista');

tintas.addEventListener("click", (evento) =>{
    if(lista.style.visibility === "hidden"){
        lista.style.visibility = "visible";
    }
    else{
        lista.style.visibility = "hidden"
    }
})