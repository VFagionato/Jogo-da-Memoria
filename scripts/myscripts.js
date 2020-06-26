const cardsNode = document.querySelectorAll('div.conteudocarta')
const cardsArr = Array.from(cardsNode)
let cores = ['#BD201B', '#C7AC26', '#B31FB2', '#2F1CC7', '#3396BD', '#C75724', '#28BD19', '#fff', '#BD201B', '#C7AC26', '#B31FB2', '#2F1CC7', '#3396BD', '#C75724', '#28BD19', '#fff']
const divFlip = document.getElementsByClassName('flipper')
const divArr = Array.from(divFlip)
let verify = []

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
    shuffleArray(cores)
    let bg1 = 0
    for (let pos = 0 ; pos < cores.length ; pos++){
        cardsArr[bg1].style.backgroundColor = cores[pos]
        bg1++
    }
    for (let i = 0; i < divFlip.length ; i++){
        divFlip[i].addEventListener("click", flip)
    }
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
    if ( verify[0].children[1].style.backgroundColor == verify[1].children[1].style.backgroundColor){
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