alert("Elige los productos deseados de la siguiente lista para calcular su costo total (máximo 3 $10.000)");

entrada = Number(prompt("Elige un producto de la lista: \n 1. Harina: $1000  \n 2. Sal: $1200 \n 3. Huevo: $1300 \n 4.Esencia: $1400 \n 5.Terminar"));

const harina = 1000;
const sal = 1200;
const huevo = 1300;
const esencia = 1400;

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
                valorFinal += harina;
                producto += `Harina, $ ${harina}\n`;
                alert(`Ha elegido Harina por un valor de ${harina}, continue`)
                break;
            case 2:
                valorFinal += sal;
                producto += `Sal, $ ${sal}\n`
                alert(`Ha elegido Sal por un valor de ${sal}, continue`)
                break;
            case 3:
                valorFinal += huevo;
                producto += `Huevo, $ ${huevo}\n`;
                alert(`Ha elegido huevo por un valor de ${huevo}, continue`)
                break;
            case 4:
                valorFinal += esencia;
                producto += `Esencia, $ ${esencia}\n`;
                alert(`Ha elegido Esencia por un valor de ${esencia}, continue`)
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