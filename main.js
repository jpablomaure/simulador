alert("Elige los productos deseados de la siguiente lista para calcular su costo total (máximo $10.000)");

entrada = Number(prompt("Elige un producto de la lista: \n 1. Harina: $1000  \n 2. Sal: $1200 \n 3. Huevo: $1300 \n 4.Esencia: $1400 \n 5.Terminar"));

const productos = [
    {id: 1 , desc: "harina" , precio: 1000},
    {id: 2 , desc: "sal" , precio: 1200},
    {id: 3 , desc: "huevo" , precio: 1300},
    {id: 4 , desc: "esencia" , precio: 1400},

]

let valorFinal = 0;
let acumulaProducto = [];

calcular();

function calcular() {
    while (entrada != 5) {
        switch (entrada) {
            case 1:
                valorFinal += productos[entrada-1].precio;
                console.log(valorFinal);
                acumulaProducto.push(productos[entrada-1]);
                console.log(acumulaProducto);
                alert(`se agregó ${acumulaProducto[entrada-1].desc} a $${acumulaProducto[entrada-1].precio} y el parcial es de $${valorFinal}`);
                break;
            case 2:
                valorFinal += productos[entrada-1].precio;
                console.log(valorFinal);
                acumulaProducto.push(productos[entrada-1]);
                console.log(acumulaProducto);
                alert(`se agregó ${acumulaProducto[entrada-1].desc} a $${acumulaProducto[entrada-1].precio} y el parcial es de $${valorFinal}`);
                break;
            case 3:
                valorFinal += productos[entrada-1].precio;
                console.log(valorFinal);
                acumulaProducto.push(productos[entrada-1]);
                console.log(acumulaProducto);
                alert(`se agregó ${acumulaProducto[entrada-1].desc} a $${acumulaProducto[entrada-1].precio} y el parcial es de $${valorFinal}`);
                break;
            case 4:
                valorFinal += productos[entrada-1].precio;
                console.log(valorFinal);
                acumulaProducto.push(productos[entrada-1]);
                console.log(acumulaProducto);
                alert(`se agregó ${acumulaProducto[entrada-1].desc} a $${acumulaProducto[entrada-1].precio} y el parcial es de $${valorFinal}`);
                break;
            default:
                alert("Ingrese una opción por favor");
                break;
        }
        entrada = Number(prompt("Elige un producto de la lista: \n 1. Harina: $1000  \n 2. Sal: $1200 \n 3. Huevo: $1300 \n 4.Esencia: $1400 \n 5.Terminar"));
        if (valorFinal > 10000) {
            alert(`Cuidado, no puede agregar mas productos: supera el máximo por $ ${valorFinal-10000}`);
            entrada = 5;
        }

    }

    console.log(acumulaProducto);
}

alert("Gracias por participar");