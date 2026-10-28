let arr = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31,
27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72,
11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99, 100, 12, 89, 1,
92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37, 5, 32, 9, 33, 98,
94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39, 15, 10, 46,
78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36 ];

function ordenar(arr){
    return arr.sort((a, b) => a - b)
}

function imparesOrdenados(arr){
    return ordenar(arr.filter(num => num % 2 !== 0))
}

function imparesDosCifras(arr) {
    return arr.filter(num => num % 2 !== 0 && num >= 10 && num <= 99)
}

function frecuencia(arr) {
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        let numero = arr[i];

        let yaContado = false;
        for (let k = 0; k < resultado.length; k++) {
            if (resultado[k].numero === numero) {
                yaContado = true;
            }
        }

        if (yaContado === false) {
            let veces = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === numero) {
                    veces++;
                }
            }
            resultado.push({ numero: numero, veces: veces });
        }
    }

    return resultado;
}


console.log(ordenar(arr))
console.log(imparesOrdenados(arr))
console.log(imparesDosCifras(arr))
console.log(frecuencia(arr))
