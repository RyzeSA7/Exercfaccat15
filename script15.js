let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))

    // Verificação para determinar o maior valor
    let maiorValor;
    if (valor1 > valor2) {
        maiorValor = valor1
    } else {
        maiorValor = valor2
    }

    // Exibição do maior valor
    alert(`O maior valor é: ${maiorValor}`)