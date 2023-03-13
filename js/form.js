let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (evento){
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = obtemPacienteDoForm(form)

    console.log(paciente)

    adicionaPacienteNaTabela(paciente)

    form.reset()
})

function obtemPacienteDoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function montarTr (paciente){
    let PacienteTr = document.createElement('tr')
    PacienteTr.classList.add('paciente')

    PacienteTr.appendChild(montarTd(paciente.nome, "info-nome"))
    PacienteTr.appendChild(montarTd(paciente.peso, "info-peso"))
    PacienteTr.appendChild(montarTd(paciente.altura, "info-altura"))
    PacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"))
    PacienteTr.appendChild(montarTd(paciente.imc, "info-imc"))

    return PacienteTr
}

function montarTd (dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}