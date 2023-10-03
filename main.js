'use strict'; //Mode Strict ou Modo restrito
// https://viacep.com.br

//  Função para limpar formulário, qualquer coisa que estiver no formulário vai ser apagada
//  Arrow Function

const limparFomulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//  Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero) // verefica se é numero. ^ ponto de inicio e $ ponto de termina
const cepValido = (cep) => cep.length == 8 && eNumero(cep);//pega o cep e verefica se é igual a 8

//  Responsavel pelo preenchimento do formulario
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//  Função para consumo de APi da VIA CEP
const pesquisarCEP = async() => {
    limparFomulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url); // esperar fetch liga a API
        const address = await dados.json(); //retorna dados no formato JSON

        if(address.hasOwnProperty('erro')){ 
            alert("Cep não encontrado");//caso cep não seja encontrado ele irá alertar "Cep não encontrado"
        }else{
            preencherFormulario(address);
        }
    }else{
        alert("CEP incorreto");
    }
}

//  Adciona um evento DOM no input do CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCEP);