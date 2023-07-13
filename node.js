function inserir(num){
    var número = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = número + num
}

function limpar(){
    document.getElementById('tela').innerHTML = ''
}

function apagar(){
    var resultado = document.getElementById('tela').innerHTML;
    resultado = document.getElementById('tela').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('tela').innerHTML;
    if (resultado){
        document.getElementById('tela').innerHTML = eval(resultado);
    }
}