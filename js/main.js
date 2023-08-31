// inicialização das variáveis utilizadas no programa
const xColor = "#F96167";
const oColor = "#F9E795";
const imageX = "../images/noun-x-2126085.png";
const imageO = "../images/noun-circle-1157067.png";
const jogoDaVelha = document.querySelector(".jogo-da-velha");
const casa0 = document.getElementById("0");
const casa1 = document.getElementById("1");
const casa2 = document.getElementById("2");
const casa3 = document.getElementById("3");
const casa4 = document.getElementById("4");
const casa5 = document.getElementById("5");
const casa6 = document.getElementById("6");
const casa7 = document.getElementById("7");
const casa8 = document.getElementById("8");
let pontuacaoX = document.getElementById("pontuacaoX");
let pontuacaoO = document.getElementById("pontuacaoO");
let jogador = "X";

//Inicializa o valor das pontuações puxando o valor do storage


//Detecta o click em qualquer uma das 9 caixas do jogo
casa0.addEventListener("click", () => {
    colocaSimbolo(casa0);
});
casa1.addEventListener("click", () => {
    colocaSimbolo(casa1);
});
casa2.addEventListener("click", () => {
    colocaSimbolo(casa2);
});
casa3.addEventListener("click", () => {
    colocaSimbolo(casa3);
});
casa4.addEventListener("click", () => {
    colocaSimbolo(casa4);
});
casa5.addEventListener("click", () => {
    colocaSimbolo(casa5);
});
casa6.addEventListener("click", () => {
    colocaSimbolo(casa6);
});
casa7.addEventListener("click", () => {
    colocaSimbolo(casa7);
});
casa8.addEventListener("click", () => {
    colocaSimbolo(casa8);
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
    const casasJogoDaVelha = jogoDaVelha.children;

    const linha1 = [casasJogoDaVelha[0].dataset.marked,casasJogoDaVelha[1].dataset.marked,casasJogoDaVelha[2].dataset.marked];
    const linha2 = [casasJogoDaVelha[3].dataset.marked,casasJogoDaVelha[4].dataset.marked,casasJogoDaVelha[5].dataset.marked];
    const linha3 = [casasJogoDaVelha[6].dataset.marked,casasJogoDaVelha[7].dataset.marked,casasJogoDaVelha[8].dataset.marked];

    const coluna1 = [casasJogoDaVelha[0].dataset.marked,casasJogoDaVelha[3].dataset.marked,casasJogoDaVelha[6].dataset.marked];
    const coluna2 = [casasJogoDaVelha[1].dataset.marked,casasJogoDaVelha[4].dataset.marked,casasJogoDaVelha[7].dataset.marked];
    const coluna3 = [casasJogoDaVelha[2].dataset.marked,casasJogoDaVelha[5].dataset.marked,casasJogoDaVelha[8].dataset.marked];

    const diagonal1 = [casasJogoDaVelha[0].dataset.marked,casasJogoDaVelha[4].dataset.marked,casasJogoDaVelha[8].dataset.marked];
    const diagonal2 = [casasJogoDaVelha[2].dataset.marked,casasJogoDaVelha[4].dataset.marked,casasJogoDaVelha[6].dataset.marked];

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


function colocaSimbolo(id_casa){
    /*
    Esta função irá colocar o simbolo 
    apropriado na caixa clickada.
    */
    if(id_casa.dataset.marked != "false"){
        return;
    }
    if(jogador === "X"){
        id_casa.dataset.marked = "X";
        id_casa.style.backgroundColor = xColor;
        id_casa.childNodes[0].style.opacity = 1;
        mudaImagen(imageO);
        jogador = "O";
    }else{
        id_casa.dataset.marked = "O";
        id_casa.style.backgroundColor = oColor;
        id_casa.childNodes[0].style.opacity = 1;
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
    const casasJogoDaVelha = jogoDaVelha.children;
    for(let index = 0 ; index < casasJogoDaVelha.length; ++index){
        if(casasJogoDaVelha[index].dataset.marked == "false"){
            casasJogoDaVelha[index].childNodes[0].src = imagem
        }
    }
}

const allEqual = arr => arr.every(val => val === arr[0]);
