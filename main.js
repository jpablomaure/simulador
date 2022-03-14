alert("Elige los productos deseados de la siguiente lista para calcular su costo total (máximo 3 $10.000)");

entrada = Number(prompt("Elige un producto de la lista: \n 1. Harina: $1000  \n 2. Sal: $1200 \n 3. Huevo: $1300 \n 4.Esencia: $1400 \n 5.Terminar"));

const ingredientes = ["harina" , "sal" , "huevo" , "esencia" ]
const precio = [1000 , 1200 , 1300 , 1400]

let valorFinal = 0;
let producto = "";

calcular();

function mostrar() {
    alert(`El valor final de los productos seleccionados es: \n ${producto} \n Por un total de: $ ${valorFinal}`)
}

function calcular() {
    while (entrada != 5) {
        switch (entrada) {
            case 1:
                valorFinal += precio[entrada-1];
                producto += `${ingredientes[entrada-1]}, $ ${precio[entrada-1]}\n`;
                alert(`Ha elegido ${ingredientes[entrada-1]} por un valor de ${precio[entrada-1]}, continue`)
                break;
            case 2:
                valorFinal += precio[entrada-1];
                producto += `${ingredientes[entrada-1]}, $ ${precio[entrada-1]}\n`;
                alert(`Ha elegido ${ingredientes[entrada-1]} por un valor de ${precio[entrada-1]}, continue`)
                break;
            case 3:
                valorFinal += precio[entrada-1];
                producto += `${ingredientes[entrada-1]}, $ ${precio[entrada-1]}\n`;
                alert(`Ha elegido ${ingredientes[entrada-1]} por un valor de ${precio[entrada-1]}, continue`)
                break;
            case 4:
                valorFinal += precio[entrada-1];
                producto += `${ingredientes[entrada-1]}, $ ${precio[entrada-1]}\n`;
                alert(`Ha elegido ${ingredientes[entrada-1]} por un valor de ${precio[entrada-1]}, continue`)
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
    mostrar();
}

alert("Gracias por participar");