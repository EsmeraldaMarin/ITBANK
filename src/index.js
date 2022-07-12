const btndolar = document.getElementById('btndolar')
const dolarsection = document.querySelector('.dolar_contenedor_maximo')
btndolar.addEventListener('click', () => {
    dolarsection.style.display = "flex" 
    salir = document.querySelector('.dolar_contenedor_maximo .salir')
    salir.addEventListener('click', () => {
        dolarsection.style.display = "none" 
    })
})


