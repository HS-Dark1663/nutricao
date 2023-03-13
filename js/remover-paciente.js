let tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function (evento){
    evento.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        evento.target.parentNode.remove()
    }, 500)
})