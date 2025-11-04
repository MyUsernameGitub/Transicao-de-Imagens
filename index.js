let time = 3000 // tempo de rotação 3000 milessegundos ou seja 3s
let currentImageIndex = 0 // armazena a img corrente (inicia em zero)
let images = document.querySelectorAll("#slider img") // pega todas as imgs de slider e retorna uma lista com as mesmas
let max = images.length // armazena o nº de img existentes

function nextImage(){
    // remove a img atual da classe selected
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex ++ // incrementa a img

    if(currentImageIndex >= max){ // max =  5, img corrente vai até 4
        currentImageIndex = 0
    }

    // adiciona uma img a classe selected
    images[currentImageIndex].classList.add("selected")
}

function start(){ 
    // executa uma função repetidamente a cada intervalo de tempo definido em time
    // a cada 2 seg a função nextImage() é chamada
    setInterval(() =>  {
        nextImage()
    }, time)
} 

// quando a janela for carregada, chama a função start
window.addEventListener("load", start)