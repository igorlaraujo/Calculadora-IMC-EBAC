function calculadoraIMC(){

    let pesokg = document.getElementById("peso").value;
    let alturacm = document.getElementById("altura").value;
    let resultado1 = pesokg / alturacm **2;
    let formatado = resultado1.toFixed(2);


    
    
    
    document.getElementById("resultadofinal").textContent = "Resultado do IMC é: " + formatado;
}