const cardsNode = document.querySelectorAll('div.carta')
const cardsArr = Array.from(cardsNode)
let cores = ['#BD201B', '#C7AC26', '#B31FB2', '#2F1CC7', '#3396BD', '#C75724', '#28BD19', '#fff']
const divFlip = document.getElementsByClassName('flipper')
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
    let bg2 = 8

    for (let pos = 0 ; pos < cores.length ; pos++){
        cardsArr[bg1].style.backgroundColor = cores[pos]
        bg1++
    }

    shuffleArray(cores)

    for (let pos1 = 0 ; pos1 < cores.length ; pos1++){
        cardsArr[bg2].style.backgroundColor = cores[pos1]
        bg2++
    }

    shuffleArray(cardsArr)
}



// função flip identifica qual div foi clicada no htmlCollection, atribui 
function flip(){
    for (let i = 0; i < divFlip.length; i++){
        divFlip[i].addEventListener("click", function(){
            this.style.transform = "rotateY(180deg)"
            return verify.push(this) //quando o usuário seleciona a segunda carta, o elemento é adicionado duas vezes
        })
    }
    if (verify.length > 2){ // if para corrigir o problema do for acima. 
        let verify2 = verify.splice(1,1) // .splice(1,1) vai eleminar 1 elemento a partir do index 1
    }
}
