// inicialização das variáveis utilizadas no programa
const xColor = "#F96167";
const oColor = "#F9E795";
const imageX = "../images/noun-x-2126085.png";
const imageO = "../images/noun-circle-1157067.png";
const ticTacToe = document.querySelector(".tic-tac-toe");
const box0 = document.getElementById("0");
const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
let pontuacaoX = document.getElementById("pontuacaoX");
let pontuacaoO = document.getElementById("pontuacaoO");
let jogador = "X";

//Inicializa o valor das pontuações puxando o valor do storage


//Detecta o click em qualquer uma das 9 caixas do jogo
box0.addEventListener("click", () => {
    colocaSimbolo(box0);
});
box1.addEventListener("click", () => {
    colocaSimbolo(box1);
});
box2.addEventListener("click", () => {
    colocaSimbolo(box2);
});
box3.addEventListener("click", () => {
    colocaSimbolo(box3);
});
box4.addEventListener("click", () => {
    colocaSimbolo(box4);
});
box5.addEventListener("click", () => {
    colocaSimbolo(box5);
});
box6.addEventListener("click", () => {
    colocaSimbolo(box6);
});
box7.addEventListener("click", () => {
    colocaSimbolo(box7);
});
box8.addEventListener("click", () => {
    colocaSimbolo(box8);
});

//Criação de todas as funções utilizadas no programa
function aumentaPontuacao(vencedor){
    /*
    Esta função irá aumentar a pontuação do jogador que obtiver a vitória.
    */
    if(vencedor === "X"){
        //atualizar a pontuacao no storage aqui
        reset()
    }else{
        //atualizar a pontuacao no storage aqui
        reset()
    }
}


function checarVitoria(){
    /*
    Esta função irá checar as condições de
    vitória após cada rodada para detectar os seguintes casos:
    Vitória de qualquer um dos jogadores ou empate.
    */
    const filhosTicTacToe = ticTacToe.children;
    const linha1 = [filhosTicTacToe[0].dataset.marked,filhosTicTacToe[1].dataset.marked,filhosTicTacToe[2].dataset.marked];
    const linha2 = [filhosTicTacToe[3].dataset.marked,filhosTicTacToe[4].dataset.marked,filhosTicTacToe[5].dataset.marked];
    const linha3 = [filhosTicTacToe[6].dataset.marked,filhosTicTacToe[7].dataset.marked,filhosTicTacToe[8].dataset.marked];
    const coluna1 = [filhosTicTacToe[0].dataset.marked,filhosTicTacToe[3].dataset.marked,filhosTicTacToe[6].dataset.marked];
    const coluna2 = [filhosTicTacToe[1].dataset.marked,filhosTicTacToe[4].dataset.marked,filhosTicTacToe[7].dataset.marked];
    const coluna3 = [filhosTicTacToe[2].dataset.marked,filhosTicTacToe[5].dataset.marked,filhosTicTacToe[8].dataset.marked];
    const diagonal1 = [filhosTicTacToe[0].dataset.marked,filhosTicTacToe[4].dataset.marked,filhosTicTacToe[8].dataset.marked];
    const diagonal2 = [filhosTicTacToe[2].dataset.marked,filhosTicTacToe[4].dataset.marked,filhosTicTacToe[6].dataset.marked];

    if(allEqual(linha1) && linha1[0] != "false"){
        aumentaPontuacao(linha1[0]);
        return;
    }
    if(allEqual(linha2) && linha2[0] != "false"){
        aumentaPontuacao(linha2[0]);
        return;
    }
    if(allEqual(linha3) && linha3[0] != "false"){
        aumentaPontuacao(linha3[0]);
        return;
    }
    if(allEqual(coluna1) && coluna1[0] != "false"){
        aumentaPontuacao(coluna1[0]);
        return;
    }
    if(allEqual(coluna2) && coluna2[0] != "false"){
        aumentaPontuacao(coluna2[0]);
        return;
    }
    if(allEqual(coluna3) && coluna3[0] != "false"){
        aumentaPontuacao(coluna3[0]);
        return;
    }
    if(allEqual(diagonal1) && diagonal1[0] != "false"){
        aumentaPontuacao(diagonal1[0]);
        return;
    }
    if(allEqual(diagonal2) && diagonal2[0] != "false"){
        aumentaPontuacao(diagonal2[0]);
        return;
    }
    
    
}
const allEqual = arr => arr.every(val => val === arr[0]);

function colocaSimbolo(boxId){
    /*
    Esta função irá colocar o simbolo 
    apropriado na caixa clickada.
    */
    if(boxId.dataset.marked != "false"){
        return;
    }
    if(jogador === "X"){
        boxId.dataset.marked = "X";
        boxId.style.backgroundColor = xColor;
        boxId.childNodes[0].style.opacity = 1;
        mudaImagen(imageO);
        jogador = "O";
    }else{
        boxId.dataset.marked = "O";
        boxId.style.backgroundColor = oColor;
        boxId.childNodes[0].style.opacity = 1;
        mudaImagen(imageX);
        jogador = "X";
    }
    checarVitoria()
}


function reset(){
    /*
    Esta função irá resetar a partida
    para que uma nova partida se inicie.
    */
    location.reload()
}


function mudaImagen(imagem){
    /*
    Está função irá trocar as imagens das caixas desmarcadas
    */
    const filhosTicTacToe = ticTacToe.children;
    for(let index = 0 ; index < filhosTicTacToe.length; ++index){
        if(filhosTicTacToe[index].dataset.marked == "false"){
            filhosTicTacToe[index].childNodes[0].src = imagem
        }
    }
}