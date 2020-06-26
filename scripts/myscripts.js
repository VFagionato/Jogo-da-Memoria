const cardsNode = document.querySelectorAll('div.conteudocarta')
const cardsArr = Array.from(cardsNode)
const divFlip = document.getElementsByClassName('flipper')
const divArr = Array.from(divFlip)
let verify = []
let imagens = ["/imagens/alex.jpg", "/imagens/gloria.jpg", "/imagens/martyn.jpg", "/imagens/melman.png", "/imagens/reiJulian.png", "/imagens/Maurice.png", "/imagens/capitao.png", "/imagens/recruta.jpg"]



/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function colorize(){
    shuffleArray(imagens)
    let bg1 = 0
    for (let pos = 0 ; pos < imagens.length ; pos++){
        cardsArr[bg1].style.backgroundImage = "url("+imagens[pos]+")"
        bg1++
    }

    shuffleArray(imagens)

    bg1 = 8
    for (let pos = 0 ; pos < imagens.length ; pos++){
        cardsArr[bg1].style.backgroundImage = "url("+imagens[pos]+")"
        bg1++
    }

    for (let i = 0; i < divFlip.length ; i++){
        divFlip[i].addEventListener("click", flip)
    }

    shuffleArray(cardsArr)
}


function flip(){
    if(this.style.transform == "rotateY(180deg)"){
        alert('Selecione somente 2 cartas diferentes')
    } else if (verify.length >= 2){
        alert('Por favor, espere a validação')
    } else {
        this.style.transform = "rotateY(180deg)"
        if (verify.length >= 1){
            verify.push(this)       
            setTimeout( "teste()", 1000)
        } else {
            verify.push(this)
        }
    }
}


function teste(){
    if ( verify[0].children[1].style.backgroundImage == verify[1].children[1].style.backgroundImage){
        verify[0].style.opacity = "0%"
        verify[1].style.opacity = "0%"
        verify = []
    } else {
        verify[0].style.transform = "rotateY(0deg)"
        verify[1].style.transform = "rotateY(0deg)"
        verify = []
    }
}



function novoJogo(){
    for (let i = 0; i < divFlip.length ; i++){
        divFlip[i].style.transform = "rotateY(0deg)"
        divFlip[i].style.opacity = "100%"
    }
    verify = []
    setTimeout("colorize()", 1000)
    
}