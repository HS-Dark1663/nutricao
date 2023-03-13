let titulo = document.querySelector('.titulo')

titulo.textContent = 'Teste'

let pacientes = document.querySelectorAll('.paciente')

for(let i = 0; i <= pacientes.length; i++){
    let paciente = pacientes[i]

    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent

    let tdPeso = paciente.querySelector('.info-peso')
    let peso = tdPeso.textContent

    let tdImc = paciente.querySelector('.info-imc')
    let imc = calculaImc(peso, altura)

    tdImc.textContent = imc
}

function calculaImc(peso, altura){
    let imc = 0
    imc = peso / (altura * altura)

    return imc.toFixed(2)
}