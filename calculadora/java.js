var resultado = document.querySelector('#resultado')
var altura = document.querySelector('#altura')
var peso = document.querySelector('#peso')


const calcImc = () => {
    if(altura.value !== '' && peso.value !== '' ){
        const imc = (peso.value / (altura.value * altura.value)).toFixed  (2) 
        
        if (imc <= 19){
            classificacao = 'Abaixo do peso'
        }else if (imc <= 25){
            classificacao = 'Peso normal'
        }else if (imc <= 30){
            classificacao = 'Acima do peso'
        }else if (imc <= 35){
            classificacao = 'Obesidade Grau I'
        }else if (imc <= 40){
            classificacao = 'Obesidade Grau II'
        }else{
            classificacao = 'Obesidade Grau III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
    }
}