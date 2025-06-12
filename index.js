


function add() {
    let num1 = parseFloat(document.getElementById("num1-el").value); //pega o valor do input e converte para float
    // parseFloat é usado para converter uma string em um número de ponto flutuante
    let num2 = parseFloat(document.getElementById("num2-el").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Please enter valid numbers.";
        return; //se for true isNan vai mostrar a mensagem, se for verdadeiro (is not a number) ele vai continuar com a operacao
    }
    let sum = num1 + num2 //soma os dois numeros
    document.getElementById("sum-el").textContent = "Sum: " + sum
}
// Funções para subtrair, dividir e multiplicar
function subtract() {
    let num1 = parseFloat(document.getElementById("num1-el").value); 
    let num2 = parseFloat(document.getElementById("num2-el").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Please enter valid numbers.";
        return; 
    }
    let difference = num1 - num2
    document.getElementById("sum-el").textContent = "Difference: " + difference
}
function divide() {
    let num1 = parseFloat(document.getElementById("num1-el").value); 
    let num2 = parseFloat(document.getElementById("num2-el").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Please enter valid numbers.";
        return; 
    }
    if (num2 === 0) { // Adiciona validação para divisão por zero
        document.getElementById("sum-el").textContent = "Cannot divide by zero.";
        return;
    }
    let quotient = num1 / num2
    document.getElementById("sum-el").textContent = "Quotient: " + quotient
}   
function multiply() {
    let num1 = parseFloat(document.getElementById("num1-el").value); 
    let num2 = parseFloat(document.getElementById("num2-el").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum-el").textContent = "Please enter valid numbers.";
        return; 
    }
    let product = num1 * num2
    document.getElementById("sum-el").textContent = "Product: " + product
}
function clearInputs() {
    document.getElementById("num1-el").value = ""; // Limpa o valor do input num1
    document.getElementById("num2-el").value = ""; // Limpa o valor do input num2
    document.getElementById("sum-el").textContent = "Result: "; // Reseta o texto de resultado
}