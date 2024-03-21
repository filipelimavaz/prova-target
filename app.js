// QUESTÃO 1

function soma() {
    let indice = 13
    let k = 0
    let soma = 0

    while( k < indice) {
        k = k + 1
        soma = soma + k
    }

    console.log(soma)
}

// QUESTAO 2

let numero = 4

function verificaSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0) {
        console.log("O número pertence à sequência de Fibonacci.");
        return;
    }
    
    while (b <= numero) {
        let temp = b;
        b = a + b;
        a = temp;
        
        if (b === numero) {
            console.log("O número pertence à sequência de Fibonacci.");
            return;
        }
    }
    
    console.log("O número NÃO pertence à sequência de Fibonacci.");
}

verificaSequenciaFibonacci(numero);

//QUESTÃO 3

/**
 * 3.a) 9
 * 3.b) 128
 * 3.c) 49
 * 3.d) 64
 * 3.e) 13
 * 3.f) 20 
 */

//QUESTÃO 4

/** 
 *Para descobrir qual interruptor liga qual lâmpada eu iria:
     1. Primeiramente, ligar 2 interruptores e iria na sala das lâmpadas verificar quais estavam acessas
     2. Na sala das lâmpadas, iriam ter duas lâmpadas acesas e uma apagada. Sendo assim, eu poderia fazer a correlação do interuptor que não foi ligado com a lâmpada apagada
     3. Voltaria na sala dos interruptores e desligaria 1 dos interruptores ligados
     4. Voltaria na sala das lâmpadas e verificaria qual lâmpada apagou, fazendo assim a correlação
 * */ 

//QUESTÃO 5

let string = "teste"
let stringFormatada = ""

for (let i = string.length - 1; i >= 0; i--) {
    stringFormatada += string[i]
}

console.log(stringFormatada)
