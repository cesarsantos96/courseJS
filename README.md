# courseJS Ebac

## Curso de Javascript da Ebac. 



    - Javascript;
    - React;
    - TypeScript;
    - Redux;
    - Vue;
    - Mongo;
    - Angular;

## DevJS

    - Planejamento;
    - Lógica;
    - Multi Plataforma;
    - Comunicação;
    - Back-end;
    - Visual;
    - Funcional;
    - Performance;
    - Foco no usuário; 

## Método

    - Ágil;
    - Testes;
    - Evolução;
    - Conhecimento; 
    - Detalhe; 
    - Habilidades Pessoais;

## Objetivo

    - Conteúdo; 
    - Dicas;
    - Entrevistas;
    - Soluções completas;
    - Linguagens;
    - Mindset;

# Javascript

    - Estado do JS (https://2020.stateofjs.com/en-US/technologies/);
    - Onde é executado;
    - Omnipresente na Web;
    - App híbridos;
    - Interagir com a DOM;
    - Requisições dinâmica;
    - IoT (Internet das Coisas): o JS está presente em tudo;
    - ECMAScript;

## Fundamentos JS

    - Fundamentos do Javascript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks; 

## Conceito de Lógica de programação 

    - Computador: 
        -- Máquina que extrai dados;
        -- Processar: realizar operações nos dados de entrada;
    - Dado: é o que pode ser processado;
    - Informação: resultado do processamento
    - Processamento de dados: Entrada (dados) > Processamento > Saída (informação);

### E a Lógica:
     Lógica é aquilo que faz sentido;

### Como escrever um programa?
    - Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução;
    - A sequência de passos, instruções que o computador deve seguir é conhecida como Algorítimo; 

### Algorítimo

    - Sequência lógica e finita de instruções que resolvem um problema;
    - Exemplo: receita de bolo, manual de instruções;
    - Nem todo algorítimo é um programa de computador, mas todo programa é um algorítimo;
    - Quem viabiliza o funcionamento dos algorítimos nos computadores: Linguagem de programação;

#### Algorítimo

    1. Início;
    2. Receber o primeiro número; entrada 1;
    3. Receber o segundo número; entrada 2;
    4. Receber o terceiro número; entrada3;
    5. PROCESSAMENTO: Somar os 3 números recebidos e dividir por três: (entrada1 + entrada2 + entrada3)/ 3;
    6. Exibir o resultado: print, echo, console.log;
    7. Fim

#### Como treinar sua lógica 

    -  Podemos treinar a nossa lógica de várias formas, principalmente jogando. 
        - Torre de Manoi;

## Funcionalidades gerais 

    - Criar algorítimos e programas para executar no navegador: client side;
    - Manipular o DOM: elementos, eventos (cliques, submit) e  estilos;
    - Node.Js: framework JS para back-end / runtime em JS;
    - Mongo-db: banco de dados em JS;
    - React / Vue.js / Angular: frameworks JS para desenvolvimento web / mobile;
    - React Native: framework para desenvolvimento mobile;
    - Receber e manipular dados;
    - Tomar decisões baseados em lógica computacional;
    - Loop e interações;
    - condições de saída;

### Executar o JS 

    - Console Browsers;
    - Editores: Sublime, Visual Studio Code;
    - JS Fiddle https://jsfiddle.net/

## Variáveis

    São utilizados para referenciar espaço na memória;

    - var;
    - const; (fica com valor Imutável)
    - let;
    - string; (tipo de variável para conjunto de caracteres)
    - tipagem; (número ou string)
    - array; (conjunto de valores)

## Operadores


## Aritméticos: retornam o resultado de uma operação:

    - Soma; +
    - Subtração; -
    - Multiplicação; *
    - Divisão; /
    - Módulo (resto da divisão); %
    - Math: random(), round(), sqrt()



## Comparadores matemáticos: teste lógico, retorno booleano (true / false)


    - Maior que >; 
    - Menor que <; 
    - Maior ou igual>=;
    - Menos ou igual<=; 


## Comparadores lógicos: teste lógico, retorno booleano (true / false)

    - ==          igualdade entre sentenças (valor); 
    - !=          diferença entre sentenças (valor);
    - ===         igualdade entre sentenças (valor e tipo);
    - !==         diferença entre sentenças (valor e tipo);

    a == b = true; 
    a != b = false;

* Operados de  Atribuição

        a = b;
        a += b; 
        a -= b;
        a *= b;
        a /= b;
        a %= b;
        Adiciona 1 ++;
        Subtrai 1  --;


## Operadores de lógica e junção lógica

    - !  NÃO (NOT);
    - && E (AND);
    - || OU (OR);
 
        O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

### Exemplos

    a != b       // o valor de a é diferente de b 
    x !== y     // o valor e o tipo de x são diferentes de y 
    !a == b    // o valor de a não é igual ao valor de b 

### As condições lógicas são convertidas em números binários:

    true é equivalente a 1 
    false é equivalente a 0 

#### Operador lógico de atribuição

    Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

    Exemplo:
         
         var meuCarro = cor == "preto" ? "preto": "branco";

## IF 
    if (...){

    }

## Else

    else(...){

    }
* Exemplo

        if (cor == "preto"){
            meuCarro = "preto";
        } else if (cor == "vermelho"){
            meuCarro = "cinza";
        } else if (cor == "amarelo"){
            meuCarro = "branco"
        } else {
            meuCarro = "azul";
         }

## Switch

    switch (cor){
     case "branco":
        meuCarro = "branco";
         break;
    case "vermelho":
        meuCarro = "vermelho";
        break;
    case "amarelo":
        meuCarro = "amarelo";
        break;
    default : 
        console.log('não temos essa cor disponível')
    
    }
## Media escolar 

    let nota1 = 10;
    let nota2 = 9;
    let nota3 = 2;
    let nota4 = 5.5;

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 8) {
        console.log("Aluno Aprovado");

    }
    else {
        console.log("Aluno Reprovado");
    }

## Laços de Repetição (Loops)


    for ([expressaoInicial]; [condição]; [incrementoInicial]); 

    for ([km = 0]; [km <= revisao]; [km++]);

----
#
    while([condição] ){
    [execução]
    }
    var contador = 0;
    while (contador < 10 >){
    contador++;
    }

    var hora = 24;
    while (hora > 0) {
    
    console.log(hora); 
    hora--;
    }
#
--- 
    o {
    execução
    } while (condição)
### Cálculo de média de alunos

    var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]

    var nota = 0;
    for (var i = 0; i < alunos.length; i++) {
    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + i);
    console.log("Notas: " + notasAluno);

    for (c = 0; c < notasAluno.length; c++) {
        nota += notasAluno[c];
    }

    media = nota / 4;

    if (media >= 7) {
        resultado = "aprovado ";
    } else {
        resultado = "reprovado ";
    }

    console.log("Media: " + media + "-" + resultado);
    }

## Funções (functions)

- Evitar repetições de código;
- Realizar chamadas dinâmicas de algorítimos;

        function calcularMedia(notas) {
                
                let soma = 0;
                for( c = 0; c < notas.length; c++ ) {
                    soma += notas[c];
                }
                media = soma / notas.length;
                
                return media;
            
            }
            
            

            function aprovacao (media) {
                
                let condicao = media >= 7? "aprovado" : "reprovado"; 

                return condicao;

                }
                
                //console.log
            
               console.log("Média: " + calcularMedia([8,8]))
               console.log(aprovacao(calcularMedia([8,8]))) 

               --------------------------------

               function calcularMedia(notas) {
                
                let soma = 0;
                for( c = 0; c < notas.length; c++ ) {
                    soma += notas[c];
                }
                media = soma / notas.length;
                
                return media;
            
            }
            
            let media; //escopo global

            function aprovacao (notas) {
                
                let media = calcularMedia(notas);

                let condicao = media >= 7? "aprovado" : "reprovado"; 

                return condicao;

                }
                
                //console.log
            
               console.log("Média: " + calcularMedia([8,8]))
               console.log(aprovacao(calcularMedia([8,8])))

##  Funções Recursivas

        function contagemRegressiva(numero) {

            console.log(numero);

            let proximoNumero = numero - 1;

            if (proximoNumero > 0)
                contagemRegressiva(proximoNumero);
        }

        contagemRegressiva(10);

# DOM 

- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação 
- Não é uma linguagem de programação
- É essencial para o JS entender o modelo e página web

## Para que serve? 
- Alterar a estrutura 
- Alterar o estilo
- Alterar o conteúdo 

## Como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões definidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós / nodes)

## Exemplo HTML

        <html>
            <head></head>
            <body><body>
        </html>
## Exemplo Obj 

        objeto = {
            html:{
                head : {},
                body : {
                    h1 :{

                    }
                }
            }
        }

## DOM X JS

- o DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar o JavaScript

- Código é executado por navegadores
- Tornar as páginas dinâmicas 
- evitar Requisições desnecessárias (performance)
- SPS (Single Page Applications)
- Reagir rapidamente as ações dos usuários

### Desvantagens de usar o JavaScript

- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos 

Seleciona o objeto e diponibiliza (métodos / funções).callback

- document.getElementById (id)
- document.getElementByTagName ('div')
- document.createElement ('div')
- parentNode.appendChild (node) // html.appendChild ('body)
- element.innerHTML 
- element.style 
- element.setAttribute ('name').value
- element.getAttribute ('name')
- element.addEventListener()
- window.location
- window.onload 
- console.log()
- window.scrollTo() 

## Seletores
- Tipos de seletores: Tag, ID, Class, Name e Query 
- Callback 
    - getElementById()
    - getElementByTagName()
    - getElementByName()
    - getElementByClassName()
    - querySelectorAll() // id | .class 



### Referências 
 
- DOM: https://dom.spec.whatwg.org/
- Javascript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview 
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o 

