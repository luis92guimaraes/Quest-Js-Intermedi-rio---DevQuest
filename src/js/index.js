const inputs = document.querySelectorAll('.campo');
const botao = document.getElementById('enviar');
botao.addEventListener('click', (evento) =>{
    evento.preventDefault()
    inputs.forEach(input => {
        console.log(input.value)
        if (input.value === "") {
            input.classList.add('vazio')
            input.nextElementSibling.classList.add('mostrar')
        } else {
            input.classList.add('preenchido')
            input.classList.remove('vazio')
            input.nextElementSibling.classList.remove('mostrar')
        }
    })
})