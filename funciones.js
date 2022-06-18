const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
const DOLAR_OFICIAL = 'Dolar Oficial';
const DOLAR_BLUE = 'Dolar Blue';
const DOLAR_CCL = 'Dolar Contado con Liqui';
const DOLAR_BOLSA = 'Dolar Bolsa';
const DOLAR_TURISTA = 'Dolar turista';

//var moneda = [];
var promedios = {
    'compra' : [0,0],
    'venta' : [0,0],
    'variacion' : [0,0]
}; /* el primer elemento es el dato, el segundo la cantidad total de datos */

fetch(url)
    .then(response => response.json())
    .then(data => {
        let id = data.findIndex(mon => mon.casa.nombre === DOLAR_OFICIAL);
        let dolar_oficial = document.getElementById("dolar_oficial");
        dolar_oficial.innerHTML =   `<p>Dolar Oficial</p>`
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_oficial.innerHTML += `<p>Compra: No disponible</p>`
        }else{
            dolar_oficial.innerHTML += `<p>Compra: ${data[id].casa.compra}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_oficial.innerHTML += `<p>Venta: No disponible</p>`
        }else{
            dolar_oficial.innerHTML += `<p>Venta: ${data[id].casa.venta}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.variacion))){
            dolar_oficial.innerHTML += `<p>Variacion: No disponible</p>`
        }else{
            dolar_oficial.innerHTML += `<p>Variacion: ${data[id].casa.variacion}</p>`
            promedios.variacion[0] += parseFloat(data[id].casa.variacion);
            promedios.variacion[1]++;
        }
        /************************************/
        id = data.findIndex(mon => mon.casa.nombre === DOLAR_BLUE);
        let dolar_blue = document.getElementById("dolar_blue");
        dolar_blue.innerHTML =   `<p>Dolar Blue</p>`
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_blue.innerHTML += `<p>Compra: No disponible</p>`
        }else{
            dolar_blue.innerHTML += `<p>Compra: ${data[id].casa.compra}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_blue.innerHTML += `<p>Venta: No disponible</p>`
        }else{
            dolar_blue.innerHTML += `<p>Venta: ${data[id].casa.venta}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.variacion))){
            dolar_blue.innerHTML += `<p>Variacion: No disponible</p>`
        }else{
            dolar_blue.innerHTML += `<p>Variacion: ${data[id].casa.variacion}</p>`
            promedios.variacion[0] += parseFloat(data[id].casa.variacion);
            promedios.variacion[1]++;
        }
        /**************************/
        id = data.findIndex(mon => mon.casa.nombre === DOLAR_BOLSA);
        let dolar_bolsa = document.getElementById("dolar_bolsa");
        dolar_bolsa.innerHTML =   `<p>Dolar Bolsa</p>`
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_bolsa.innerHTML += `<p>Compra: No disponible</p>`
        }else{
            dolar_bolsa.innerHTML += `<p>Compra: ${data[id].casa.compra}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_bolsa.innerHTML += `<p>Venta: No disponible</p>`
        }else{
            dolar_bolsa.innerHTML += `<p>Venta: ${data[id].casa.venta}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.variacion))){
            dolar_bolsa.innerHTML += `<p>Variacion: No disponible</p>`
        }else{
            dolar_bolsa.innerHTML += `<p>Variacion: ${data[id].casa.variacion}</p>`
            promedios.variacion[0] += parseFloat(data[id].casa.variacion);
            promedios.variacion[1]++;
        }

        /******************************/

        id = data.findIndex(mon => mon.casa.nombre === DOLAR_CCL);
        let dolar_ccl = document.getElementById("dolar_ccl");
        dolar_ccl.innerHTML =   `<p>Dolar Contado con Liqui</p>`
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_ccl.innerHTML += `<p>Compra: No disponible</p>`
        }else{
            dolar_ccl.innerHTML += `<p>Compra: ${data[id].casa.compra}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_ccl.innerHTML += `<p>Venta: No disponible</p>`
        }else{
            dolar_ccl.innerHTML += `<p>Venta: ${data[id].casa.venta}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.variacion))){
            dolar_ccl.innerHTML += `<p>Variacion: No disponible</p>`
        }else{
            dolar_ccl.innerHTML += `<p>Variacion: ${data[id].casa.variacion}</p>`
            promedios.variacion[0] += parseFloat(data[id].casa.variacion);
            promedios.variacion[1]++;
        }

        /***********************************/
        id = data.findIndex(mon => mon.casa.nombre === DOLAR_TURISTA);
        let dolar_turista = document.getElementById("dolar_turista");
        dolar_turista.innerHTML =   `<p>Dolar Turista</p>`
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_turista.innerHTML += `<p>Compra: No disponible</p>`
        }else{
            dolar_turista.innerHTML += `<p>Compra: ${data[id].casa.compra}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_turista.innerHTML += `<p>Venta: No disponible</p>`
        }else{
            dolar_turista.innerHTML += `<p>Venta: ${data[id].casa.venta}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.variacion))){
            dolar_turista.innerHTML += `<p>Variacion: No disponible</p>`
        }else{
            dolar_turista.innerHTML += `<p>Variacion: ${data[id].casa.variacion}</p>`
            promedios.variacion[0] += parseFloat(data[id].casa.variacion);
            promedios.variacion[1]++;
        }

        /**************************************/
        promedios.compra[0] /= promedios.compra[1];
        promedios.venta[0] /= promedios.venta[1];
        promedios.variacion[0] /= promedios.variacion[1];

        let dolar_promedio = document.getElementById("dolar_promedio");
        dolar_promedio.innerHTML =  `<p>Dolar Promedio</p>
                                    <p>Compra: ${promedios.compra[0].toFixed(2)}</p>
                                    <p>Venta: ${promedios.venta[0].toFixed(2)}</p>
                                    <p>Variación: ${promedios.variacion[0].toFixed(2)}</p>`;

    })

/*
function armar_arreglo(data) {
    for (let i = 0; i < data.length; i++) {
        moneda.push(data[i].casa);
    }
}
*/
