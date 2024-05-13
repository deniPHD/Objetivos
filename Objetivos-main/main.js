const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll (".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-01-01T00:00:00");
const tempoObjetivo2 = new Date("2025-04-01T00:00:00");
const tempoObjetivo3 = new Date("2029-01-01T00:00:00");
const tempoAtual = new Date;
//Declara quais elementos vão ser lidos. O script vai ler todos que tiverem a classe "botao".

for(let i=0;i <botoes.length;i++){
    //Variável "i" é igual a 0, mas enquanto essa variável for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i será a quantidade de botões.
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        }
        //Remove a classe "ativo" de todos os botões.
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
        //Adiciona a classe ativo só no botão clicado.
    }
}
function calculaTempo (tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor (tempoFinal/1000);
    let minutos = Math.floor (segundos/60);
    let horas = Math.floor (minutos/60);
    let dias = Math.floor (horas/24);
    let mes = Math.floor (dias/30);
    segundos %= 60;
    minutos %=60;
    horas %=24;

    return dias + "   dias sofridos,     "    + horas + "    horas jogando,     " + minutos +  "   minutos pensando no que fazer,     " + segundos + "   segundos piscando.    ";

}
comecaCronometro();

function comecaCronometro(){
    atualizaCronometro();
    setInterval (atualizaCronometro,1000);}

function atualizaCronometro (){
    contadores[0].textContent = calculaTempo(tempoObjetivo1);
    contadores[1].textContent = calculaTempo(tempoObjetivo2);
    contadores[2].textContent = calculaTempo(tempoObjetivo3);
}  








