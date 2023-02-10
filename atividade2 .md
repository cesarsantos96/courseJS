
1.	Resolva as operações:
●	10 + 15 =  25 number
●	“10” + 2 = 102 string
●	“10” * 2 = 20 number
●	“10” / 3 =  3.333 float
●	“10” % 3 =  1 number
●	10 + true = 11 number
●	10 == ”10” = true boolean 
●	10 === “10” = false  boolean
●	10 < 11 = true boolean
●	10 > 12 = false boolean
●	10 <= 10.1 = true  boolean
●	10 > 9.99 = true boolean
●	10 != “dez” = true boolean
●	10 + true = 11 number
●	“dez” + true = deztrue string
●	10 + false = 10 number
●	10 * false = 0 number
●	true + true = 2 number
●	10++ = 10 number
●	10-- = 10 number 
●	1 & 1 = 1 number
●	1 & 0 = 0 number
●	0 & 0 = 0 number
●	1 & 0 = 0 number 
●	0 / 1 =  0 number
●	5 + 5 == 10 = TRUE boolean
●	“5” + ”5” == 10 = FALSE boolean 
●	“5” * 2 > 9 = true number
●	(10 + 10) * 2 = 40 number 
●	10 + 10 * 2 = 30 number 




2.	Responda as perguntas de acordo com as variáveis.
var branco = “preto”; var preto = “cinza”; var cinza = “branco”; var carro = “preto”; var valor = 30000; var prestacao = 750;
a)	branco == “branco” -  False boolean 
b)	branco == cinza -False boolean
c)	carro === branco TRUE – boolean 
d)	var cavalo = carro == “preto” ? “cinza” : “marron”;  CINZA  STRING
e)	Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.  36 vezes 


    var downPayment = 3000;
    var totalCost = 30000;
    var installmentAmount = 750;
    var remainingBalance = totalCost - downPayment;
    var numberOfInstallments = remainingBalance / installmentAmount;

    console.log(numberOfInstallments);


f)	Somando as variáveis de cores é formada uma string de quantos caracteres? 

21 caracteres 

        
    var branco = "preto";
    var preto = "cinza";
    var cinza = "branco";
    var carro = "preto";
    var colors = branco + " " + cinza + " " + preto;
    console.log(colors.length); // 21
