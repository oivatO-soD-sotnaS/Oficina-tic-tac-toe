// inicialização das variáveis utilizadas no programa
const xColor = "#F96167";
const oColor = "#F9E795";
const imagemX = "images/imagemX.png";
const imagemO = "images/imagemO.png";
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
let pontuacaoVelhas = document.getElementById("pontuacaoVelhas");
let jogador = "X";
const casasMarcadas = [];

//Inicializa o valor das pontuações puxando o valor do storage
if(localStorage.pontuacaoX != null){
    pontuacaoX.innerText = localStorage.getItem("pontuacaoX") < 10 ? "0" + localStorage.getItem("pontuacaoX") : localStorage.getItem("pontuacaoX");
}
if(localStorage.pontuacaoO != null){
    pontuacaoO.innerText = localStorage.getItem("pontuacaoO") < 10 ? "0" + localStorage.getItem("pontuacaoO") : localStorage.getItem("pontuacaoO");
}
if(localStorage.pontuacaoVelhas != null){
    pontuacaoVelhas.innerText = localStorage.getItem("pontuacaoVelhas") < 10 ? "0" + localStorage.getItem("pontuacaoVelhas") : localStorage.getItem("pontuacaoVelhas");
}
//Detecta o click em qualquer uma das 9 caixas do jogo
casa0.addEventListener("click", () => {
    colocaSimbolo(casa0);
    checarEmpate(casa0);
});
casa1.addEventListener("click", () => {
    colocaSimbolo(casa1);
    checarEmpate(casa1);
});
casa2.addEventListener("click", () => {
    colocaSimbolo(casa2);
    checarEmpate(casa2);
});
casa3.addEventListener("click", () => {
    colocaSimbolo(casa3);
    checarEmpate(casa3);

});
casa4.addEventListener("click", () => {
    colocaSimbolo(casa4);
    checarEmpate(casa4);

});
casa5.addEventListener("click", () => {
    colocaSimbolo(casa5);
    checarEmpate(casa5);

});
casa6.addEventListener("click", () => {
    colocaSimbolo(casa6);
    checarEmpate(casa6);

});
casa7.addEventListener("click", () => {
    colocaSimbolo(casa7);
    checarEmpate(casa7);

});
casa8.addEventListener("click", () => {
    colocaSimbolo(casa8);
    checarEmpate(casa8);
});

//Criação de todas as funções utilizadas no programa
function aumentaPontuacao(vencedor){
    /*
    Esta função irá aumentar a pontuação do jogador que obtiver a vitória.
    */
    if(vencedor === "X"){
        //atualizar a pontuacao no storage aqui
        localStorage.pontuacaoX = parseInt(pontuacaoX.innerText) + 1;
        reload();
    }else{
        //atualizar a pontuacao no storage aqui
        localStorage.pontuacaoO = parseInt(pontuacaoO.innerText) + 1;
        reload();
    }
}


function checarVitoria(){
    /*
    Esta função irá checar as condições de
    vitória após cada rodada para detectar os seguintes casos:
    Vitória de qualquer um dos jogadores ou empate.
    */

    const linha1 = [casa0.dataset.marked,casa1.dataset.marked,casa2.dataset.marked];
    const linha2 = [casa3.dataset.marked,casa4.dataset.marked,casa5.dataset.marked];
    const linha3 = [casa6.dataset.marked,casa7.dataset.marked,casa8.dataset.marked];

    const coluna1 = [casa0.dataset.marked,casa3.dataset.marked,casa6.dataset.marked];
    const coluna2 = [casa1.dataset.marked,casa4.dataset.marked,casa7.dataset.marked];
    const coluna3 = [casa2.dataset.marked,casa5.dataset.marked,casa8.dataset.marked];

    const diagonal1 = [casa0.dataset.marked,casa4.dataset.marked,casa8.dataset.marked];
    const diagonal2 = [casa2.dataset.marked,casa4.dataset.marked,casa6.dataset.marked];

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

function checarEmpate(casa){
    casasMarcadas.push(casa)
    if(casasMarcadas.length === 9){
        localStorage.pontuacaoVelhas = parseInt(pontuacaoVelhas.innerText) + 1;
        reload();
    }
}

function colocaSimbolo(casa){
    /*
    Esta função irá colocar o simbolo 
    apropriado na caixa clickada.
    */
    if(casa.dataset.marked != "false"){
        return;
    }
    if(jogador === "X"){
        casa.dataset.marked = jogador;
        casa.parentElement.style.backgroundColor = xColor;
        casa.style.opacity = 1;
        mudaImagen(imagemO);
        jogador = "O";
    }else{
        casa.dataset.marked = jogador;
        casa.parentElement.style.backgroundColor = oColor;
        casa.style.opacity = 1;
        mudaImagen(imagemX);
        jogador = "X";
    }
    checarVitoria()
}


function reload(){
    /*
    Esta função irá resetar a partida
    para que uma nova partida se inicie.
    */
    location.reload();
}

function reset_btn(){
    reload();
    localStorage.clear();
}

function mudaImagen(imagem){
    /*
    Está função irá trocar as imagens das caixas desmarcadas
    */
   const casas = [casa0,casa1,casa2,casa3,casa4,casa5,casa6,casa7,casa8];
   casas.forEach( casa => {
        if(casa.dataset.marked == "false"){
            casa.src = imagem
        }
   })
}

const allEqual = arr => arr.every(val => val === arr[0]);
