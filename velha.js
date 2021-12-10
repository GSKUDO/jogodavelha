let vez = "O";
let espera = "X";
let aux;
let ganhou = "em jogo";

var board =
[ [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']];


// troca o turno //

function jogada() {
    //troca a vez//
        document.getElementById("jogador").innerHTML = espera;
        aux = vez;
        vez = espera; 
        espera = aux;
    //verifica se há ganhadores//
        verificaGanhador();
}

//funcao para fazer jogadas //
function selecionar(objButton,i,j) {
    console.log(objButton.getAttribute("attr-position"));
    if (board [i][j] === ' '){
        board [i][j] = vez;
        objButton.innerHTML = vez;
        jogada();
    }else{
        alert("Jogada Inválida!");
    }
}

//verifica se alguem ganhou//
function verificaGanhador() {

    //colunas - não funciona!!//
    for (let i = 0; i < 3; i++) {
        if ((board [0][i] !== ' ') && ((board [0][i] === board [1][i]) && (board [1][i] === [2][i])))
        {   
            ganhou = espera;
            document.getElementById("ganhador").innerHTML = "O ganhador é: " + ganhou; 
        }
    }

    //linhas//
    for (let i = 0; i < 3; i++) {
        if ((board [i][0] !== ' ') && ((board [i][0] === board [i][1]) && (board [i][1] === board [i][2])))
        {   
            ganhou = espera;
            document.getElementById("ganhador").innerHTML = "O ganhador é: " + ganhou; 
        }
    }

    //diagonal//
    if ((board [0][0] !== ' ') && ((board [0][0] === board [1][1]) && (board [1][1] === board[2][2]))){   
        ganhou = espera;
        document.getElementById("ganhador").innerHTML = "O ganhador é: " + ganhou; 
    }
    //outra diagonal//
    if ((board [0][2] !== ' ') && ((board [0][2] === board [1][1]) && (board [1][1] === board[2][0]))) {   
        ganhou = espera;
        document.getElementById("ganhador").innerHTML = "O ganhador é: " + ganhou; 
    }
    //fim de jogo - falta saber porque nao zera o tabuleiro//
    if (ganhou !== "em jogo") {
        alert("fim de jogo");
        board =
                [ [' ',' ',' '],
                [' ',' ',' '],
                [' ',' ',' ']];
    }
}


