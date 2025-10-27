const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da operação de soma', function() {

    it('A função deve ser capaz de somar dois números positivos', function(){
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (4,6);

        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(10);
    });
    
    it('A função deve ser capaz de somar um número positivo e um negativo', function(){
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (10,-8);

        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(2);

    });
})