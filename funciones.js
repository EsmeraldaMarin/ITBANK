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
        fecha = new Date();
        let id = data.findIndex(mon => mon.casa.nombre === DOLAR_OFICIAL);
        let dolar_oficial = document.getElementById("dolar_oficial");
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_oficial.innerHTML += `<p>Compra: no disponible</p>`
        }else{
            dolar_oficial.innerHTML += `<p>Compra: ${parseFloat(data[id].casa.compra).toFixed(2)}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_oficial.innerHTML += `<p>Venta: no disponible</p>`
        }else{
            dolar_oficial.innerHTML += `<p>Venta: ${parseFloat(data[id].casa.venta).toFixed(2)}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        let variacion = parseFloat(data[id].casa.variacion.replace(',', '.'));
        if(isNaN(variacion)){
            dolar_oficial.innerHTML += `<p>Variación: no disponible</p>`
        }else{
            if(variacion.toFixed(2) > 0){
                dolar_oficial.innerHTML += `<i class="fa-solid fa-caret-up"></i><span> Variación: +${variacion}%</span>`;
            }else if(variacion < 0){
                dolar_oficial.innerHTML += `<i class="fa-solid fa-caret-down"></i><span> Variación: ${variacion}%</span>`;
            }else{
                dolar_oficial.innerHTML += `<i class="fa-solid fa-caret-right"></i><span> Variación: ${variacion}%</span>`;
            }
            promedios.variacion[0] += variacion;
            promedios.variacion[1]++;
        }
        dolar_oficial.innerHTML += `<p>Act: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</p>`;
        /************************************/
        id = data.findIndex(mon => mon.casa.nombre === DOLAR_BLUE);
        let dolar_blue = document.getElementById("dolar_blue");
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_blue.innerHTML += `<p>Compra: no disponible</p>`
        }else{
            dolar_blue.innerHTML += `<p>Compra: ${parseFloat(data[id].casa.compra).toFixed(2)}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_blue.innerHTML += `<p>Venta: no disponible</p>`
        }else{
            dolar_blue.innerHTML += `<p>Venta: ${parseFloat(data[id].casa.venta).toFixed(2)}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        variacion = parseFloat(data[id].casa.variacion.replace(',', '.'));
        if(isNaN(variacion)){
            dolar_blue.innerHTML += `<p>Variación: no disponible</p>`
        }else{
            if(variacion.toFixed(2) > 0){
                dolar_blue.innerHTML += `<i class="fa-solid fa-caret-up"></i><span> Variación: +${variacion}%</span>`;
            }else if(variacion < 0){
                dolar_blue.innerHTML += `<i class="fa-solid fa-caret-down"></i><span> Variación: ${variacion}%</span>`;
            }else{
                dolar_blue.innerHTML += `<i class="fa-solid fa-caret-right"></i><span> Variación: ${variacion}%</span>`;
            }
            promedios.variacion[0] += variacion;
            promedios.variacion[1]++;
        }
        dolar_blue.innerHTML += `<p>Act: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</p>`;
        /**************************/
        id = data.findIndex(mon => mon.casa.nombre === DOLAR_BOLSA);
        let dolar_bolsa = document.getElementById("dolar_bolsa");
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_bolsa.innerHTML += `<p>Compra: no disponible</p>`
        }else{
            dolar_bolsa.innerHTML += `<p>Compra: ${parseFloat(data[id].casa.compra).toFixed(2)}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_bolsa.innerHTML += `<p>Venta: no disponible</p>`
        }else{
            dolar_bolsa.innerHTML += `<p>Venta: ${parseFloat(data[id].casa.venta).toFixed(2)}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        variacion = parseFloat(data[id].casa.variacion.replace(',', '.'));
        if(isNaN(variacion)){
            dolar_bolsa.innerHTML += `<p>Variación: no disponible</p>`
        }else{
            if(variacion.toFixed(2) > 0){
                dolar_bolsa.innerHTML += `<i class="fa-solid fa-caret-up"></i><span> Variación: +${variacion}%</span>`;
            }else if(variacion < 0){
                dolar_bolsa.innerHTML += `<i class="fa-solid fa-caret-down"></i><span> Variación: ${variacion}%</span>`;
            }else{
                dolar_bolsa.innerHTML += `<i class="fa-solid fa-caret-right"></i><span> Variación: ${variacion}%</span>`;
            }
            promedios.variacion[0] += variacion;
            promedios.variacion[1]++;
        }
        dolar_bolsa.innerHTML += `<p>Act: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</p>`;
        /******************************/

        id = data.findIndex(mon => mon.casa.nombre === DOLAR_CCL);
        let dolar_ccl = document.getElementById("dolar_ccl");
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_ccl.innerHTML += `<p>Compra: no disponible</p>`
        }else{
            dolar_ccl.innerHTML += `<p>Compra: ${parseFloat(data[id].casa.compra).toFixed(2)}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_ccl.innerHTML += `<p>Venta: no disponible</p>`
        }else{
            dolar_ccl.innerHTML += `<p>Venta: ${parseFloat(data[id].casa.venta).toFixed(2)}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        variacion = parseFloat(data[id].casa.variacion.replace(',', '.'));
        if(isNaN(variacion)){
            dolar_ccl.innerHTML += `<p>Variación: no disponible</p>`
        }else{
            if(variacion.toFixed(2) > 0){
                dolar_ccl.innerHTML += `<i class="fa-solid fa-caret-up"></i><span> Variación: +${variacion}%</span>`;
            }else if(variacion < 0){
                dolar_ccl.innerHTML += `<i class="fa-solid fa-caret-down"></i><span> Variación: ${variacion}%</span>`;
            }else{
                dolar_ccl.innerHTML += `<i class="fa-solid fa-caret-right"></i><span> Variación: ${variacion}%</span>`;
            }
            promedios.variacion[0] += variacion;
            promedios.variacion[1]++;
        }
        dolar_ccl.innerHTML += `<p>Act: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</p>`;
        /***********************************/
        id = data.findIndex(mon => mon.casa.nombre === DOLAR_TURISTA);
        let dolar_turista = document.getElementById("dolar_turista");
        if(isNaN(parseFloat(data[id].casa.compra))){
            dolar_turista.innerHTML += `<p>Compra: no disponible</p>`
        }else{
            dolar_turista.innerHTML += `<p>Compra: ${parseFloat(data[id].casa.compra).toFixed(2)}</p>`
            promedios.compra[0] += parseFloat(data[id].casa.compra);
            promedios.compra[1]++;
        }
        if(isNaN(parseFloat(data[id].casa.venta))){
            dolar_turista.innerHTML += `<p>Venta: no disponible</p>`
        }else{
            dolar_turista.innerHTML += `<p>Venta: ${parseFloat(data[id].casa.venta).toFixed(2)}</p>`
            promedios.venta[0] += parseFloat(data[id].casa.venta);
            promedios.venta[1]++;
        }
        variacion = parseFloat(data[id].casa.variacion.replace(',', '.'));
        if(isNaN(variacion)){
            dolar_turista.innerHTML += `<p>Variación: no disponible</p>`
        }else{
            if(variacion.toFixed(2) > 0){
                dolar_turista.innerHTML += `<i class="fa-solid fa-caret-up"></i><span> Variación: +${variacion}%</span>`;
            }else if(variacion < 0){
                dolar_turista.innerHTML += `<i class="fa-solid fa-caret-down"></i><span> Variación: ${variacion}%</span>`;
            }else{
                dolar_turista.innerHTML += `<i class="fa-solid fa-caret-right"></i><span> Variación: ${variacion}%</span>`;
            }
            promedios.variacion[0] += variacion;
            promedios.variacion[1]++;
        }
        dolar_turista.innerHTML += `<p>Act: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</p>`;
        /**************************************/
        promedios.compra[0] /= promedios.compra[1];
        promedios.venta[0] /= promedios.venta[1];
        promedios.variacion[0] /= promedios.variacion[1];

        let dolar_promedio = document.getElementById("dolar_promedio");
        dolar_promedio.innerHTML += `<p>Compra: ${promedios.compra[0].toFixed(2)}</p>`;
        dolar_promedio.innerHTML += `<p>Venta: ${promedios.venta[0].toFixed(2)}</p>`;
        if(variacion.toFixed(2) > 0){
            dolar_promedio.innerHTML += `<i class="fa-solid fa-caret-up"></i><span> Variación: +${variacion}%</span>`;
        }else if(variacion < 0){
            dolar_promedio.innerHTML += `<i class="fa-solid fa-caret-down"></i><span> Variación: ${variacion}%</span>`;
        }else{
            dolar_promedio.innerHTML += `<i class="fa-solid fa-caret-right"></i><span> Variación: ${variacion}%</span>`;
        }
        dolar_promedio.innerHTML += `<p>Act: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}</p>`;
    })

/*
function armar_arreglo(data) {
    for (let i = 0; i < data.length; i++) {
        moneda.push(data[i].casa);
    }
}
*/
