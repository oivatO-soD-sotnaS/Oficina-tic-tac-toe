// inicialização das variáveis utilizadas no programa
const xColor = "#F96167"
const oColor = "#F9E795"
const ticTacToe = document.querySelector(".tic-tac-toe")
const box0 = document.getElementById("0")
const box1 = document.getElementById("1")
const box2 = document.getElementById("2")
const box3 = document.getElementById("3")
const box4 = document.getElementById("4")
const box5 = document.getElementById("5")
const box6 = document.getElementById("6")
const box7 = document.getElementById("7")
const box8 = document.getElementById("8")
let jogadorX = document.getElementById("jogadorX")
let jogadorO = document.getElementById("jogadorO")
let jogador = "X"

//Detecta o click em qualquer uma das 9 caixas do jogo
box0.addEventListener("click", () => {
    colocaSimbolo(box0)
})
box1.addEventListener("click", () => {
    colocaSimbolo(box1)
})
box2.addEventListener("click", () => {
    colocaSimbolo(box2)
})
box3.addEventListener("click", () => {
    colocaSimbolo(box3)
})
box4.addEventListener("click", () => {
    colocaSimbolo(box4)
})
box5.addEventListener("click", () => {
    colocaSimbolo(box5)
})
box6.addEventListener("click", () => {
    colocaSimbolo(box6)
})
box7.addEventListener("click", () => {
    colocaSimbolo(box7)
})
box8.addEventListener("click", () => {
    colocaSimbolo(box8)
})

//Criação de todas as funções utilizadas no programa
function aumentaPontuacao(){
    /*
    Esta função irá aumentar a pontuação do jogador que obtiver a vitória.
    */
}


function checarVitoria(){
    /*
    Esta função irá checar as condições de
    vitória após cada rodada para detectar os seguintes casos:
    Vitória de qualquer um dos jogadores e empate.
    */

}


function colocaSimbolo(boxId){
    /*
    Esta função irá colocar o simbolo 
    apropriado na caixa clickada.
    */
    if(boxId.childNodes[0].style.opacity == 1){
        return
    }
    if(jogador === "X"){
        boxId.style.backgroundColor = xColor
        boxId.childNodes[0].src = "../images/noun-x-2126085.png"
        boxId.childNodes[0].style.opacity = 1
        jogador = "O"
    }else{
        boxId.style.backgroundColor = oColor
        boxId.childNodes[0].src = "../images/noun-circle-1157067.png"
        boxId.childNodes[0].style.opacity = 1
        jogador = "X"
    }
}


function reset(){
    /*
    Esta função irá resetar as caixas e o jogador inicial
    para que uma nova partida se inicie.
    */
    jogador = "X"
    for (let index = 0; index < ticTacToe.children.length; index++){
        ticTacToe.children[index].style.backgroundColor = "#2F3C7E"
        ticTacToe.children[index].childNodes[0].style.opacity = 0
    }
}