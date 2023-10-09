# Índice 

* [Formulário de Cadastro de Endereço](#formulario-de-cadastro-de-endereço)  
* [Descrição](#descri%C3%A7%C3%A3o) 
* [Funcionalidades](#funcioanlidades)  
* [Tecnologia Utilizadas](#tecnologia-utilizadas)  
* [Fontes Consultadas](#fontes-consultadas)  
* [Autores](#autores)  


# Formulário de Cadastro de Endereço
Projeto criado para aprendizado de API.
![Capa do Projeto](doc/img/capaendereco.png)


## Descrição
O Projeto Cadastro de Endereço, usa API da ViaCEP para que apartir do CEP do usuário seja preenchido os campos cidade, bairro, UF(estado) e logradouro. Foi utilizado a API da ViaCEP, onde foi pego os códigos em JavaScript e também foi feito o uso de Bootstrap.


## 🛠️Funcioanlidades
O Projeto contém 4 funcionalidades:
1.Preenchimento Automático.
    ![gif](doc/inserindoCEP.gif)

No JS é representado pela função:<br>
                const preencherFormulario = (endereco) => {
                    document.getElementById('rua').value = endereco.logradouro;
                    document.getElementById('bairro').value = endereco.bairro;
                    document.getElementById('cidade').value = endereco.localidade;
                    document.getElementById('estado').value = endereco.uf;
                }
Onde é pego as informações da API e preenchidas no formulário. 

2.Confimação do CEP e limpeza dos campos
  ![gif](doc/cadastrandoCEP.gif)

            //Verifica se o CEP é válido
            const eNumero = (numero) => /^[0-9]+$/.test(numero)
            const cepValido = (cep) => cep.length == 8 && eNumero(cep);
Verificação do CEP, se contém apenas números, e se possui 8 números.

            //Limpa Formulário
            const limparFomulario = () => {
                document.getElementById('rua').value = '';
                document.getElementById('bairro').value = '';
                document.getElementById('cidade').value = '';
                document.getElementById('estado').value = '';
            }
Aqui é feito o limpeza dos campos onde o valor está igual a nada(null)


CEP não encontrado
    CEPnaoencontrado.gif

CEP incorreto
    CEPincorreto.gif



## 💻Tecnologia Utilizadas
- :heavy_check_mark: [HTML]
- :heavy_check_mark: [CSS]
- :heavy_check_mark: [JS]
- :heavy_check_mark: [BOOTSTRAP]
- :heavy_check_mark: [GIT]


## Autores
Aluno: Caio Estevão
- Github: [github.com](https://github.com/Caioestevao1000)

### Auxílio
Professor: Leonardo Rocha
- Github: [github.com](https://github.com/LeonardoRochaMarista)
