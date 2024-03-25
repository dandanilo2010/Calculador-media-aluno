const botao = document.querySelector(".button")
const input1 = document.querySelector(".input-nota01")
const input2 = document.querySelector(".input-nota02")
const resultadoDaMedia = document.querySelector("h2")


function calcularMedia(){

    const nota1 = parseFloat(input1.value)
    const nota2 = parseFloat(input2.value)
    const resultado = nota1 + nota2
    console.log(resultado);


    resultadoDaMedia.innerHTML = "A média do aluno foi " + resultado

    if(resultado > 6) {
        alert("Parabéns, você foi aprovado")
    
    }else 
    alert("Você foi reprovado")
}




botao.addEventListener("click", calcularMedia)
