function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
    // 1. Soma todos os valores
    const resultadoSoma = somarDoisNumeros(valor1, valor2);

    // 2. Divide pela quantidade de valores
    const resultadoDaMediaDeDoisValores = resultadoDaMediaDeDoisValores / 2;

    // 3. Exibe o resultado no console
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros
}