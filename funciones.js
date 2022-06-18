const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
const DOLAR_OFICIAL = 'Dolar Oficial';
const DOLAR_BLUE = 'Dolar Blue';
const DOLAR_CCL = 'Dolar Contado con Liqui';
const DOLAR_BOLSA = 'Dolar Bolsa';
const DOLAR_TURISTA = 'Dolar Turista';

var moneda = [];
var promedios = {
    'compra' : 0,
    'venta' : 0,
    'variacion' : 0
};

fetch(url)
    .then(response => response.json())
    .then(data => {
        let id = data.findIndex(mon => mon.casa.nombre === DOLAR_OFICIAL);
        let dolar_oficial = document.getElementById("dolar_oficial");
        dolar_oficial.innerHTML =   `<p>Dolar Oficial</p>
                                    <p>Compra: ${data[id].casa.compra}</p>
                                    <p>Venta: ${data[id].casa.venta}</p>
                                    <p>Variación: ${data[id].casa.variacion}</p>`;
        promedios.compra += parseFloat(data[id].casa.compra);
        promedios.venta += parseFloat(data[id].casa.venta);
        promedios.variacion += parseFloat(data[id].casa.variacion);

        id = moneda.findIndex(mon => mon.nombre === DOLAR_BLUE);
        let dolar_blue = document.getElementById("dolar_blue");
        dolar_blue.innerHTML =   `<p>Dolar Blue</p>
                                    <p>Compra: ${data[id].casa.compra}</p>
                                    <p>Venta: ${data[id].casa.venta}</p>
                                    <p>Variación: ${data[id].casa.variacion}</p>`;
        promedios.compra += parseFloat(data[id].casa.compra);
        promedios.venta += parseFloat(data[id].casa.venta);
        promedios.variacion += parseFloat(data[id].casa.variacion);

        id = moneda.findIndex(mon => mon.nombre === DOLAR_CCL);
        let dolar_ccl = document.getElementById("dolar_ccl");
        dolar_ccl.innerHTML =   `Dolar Contado con Liqui</p>
                                <p>Compra: ${data[id].casa.compra}</p>
                                <p>Venta: ${data[id].casa.venta}</p>
                                <p>Variación: ${data[id].casa.variacion}</p>`;
        promedios.compra += parseFloat(data[id].casa.compra);
        promedios.venta += parseFloat(data[id].casa.venta);
        promedios.variacion += parseFloat(data[id].casa.variacion);

        id = moneda.findIndex(mon => mon.nombre === DOLAR_BOLSA);
        let dolar_bolsa = document.getElementById("dolar_bolsa");
        dolar_bolsa.innerHTML =   `<p>Dolar Bolsa</p>
                                    <p>Compra: ${data[id].casa.compra}</p>
                                    <p>Venta: ${data[id].casa.venta}</p>
                                    <p>Variación: ${data[id].casa.variacion}</p>`;
        promedios.compra += parseFloat(data[id].casa.compra);
        promedios.venta += parseFloat(data[id].casa.venta);
        promedios.variacion += parseFloat(data[id].casa.variacion);

        id = moneda.findIndex(mon => mon.nombre === DOLAR_TURISTA);
        let dolar_turista = document.getElementById("dolar_turista");
        dolar_turista.innerHTML =   `<p>Dolar Turista</p>
                                    <p>Compra: ${data[id].casa.compra}</p>
                                    <p>Venta: ${data[id].casa.venta}</p>
                                    <p>Variación: ${data[id].casa.variacion}</p>`;
        promedios.compra += parseFloat(data[id].casa.compra);
        promedios.venta += parseFloat(data[id].casa.venta);
        promedios.variacion += parseFloat(data[id].casa.variacion);

        let dolar_promedio = document.getElementById("dolar_promedio");
        dolar_promedio.innerHTML =  `<p>Dolar Promedio</p>
                                    <p>Compra: ${promedios.compra/5}</p>
                                    <p>Venta: ${promedios.venta/5}</p>
                                    <p>Variación: ${promedios.variacion/5}</p>`;

    })

/*
function armar_arreglo(data) {
    for (let i = 0; i < data.length; i++) {
        moneda.push(data[i].casa);
    }
}
*/