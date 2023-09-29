'use strict'; //Mode Strict ou Modo restrito
// https://viacep.com.br

//Função para limpar formulário
//Arrow Function
const limparfomulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}