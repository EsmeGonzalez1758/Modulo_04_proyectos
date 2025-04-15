function findMax(arr) {
    // Caso base: si el arreglo tiene un solo elemento, devuélvelo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);  // Obtener la primera mitad
    const right = arr.slice(mid);     // Obtener la segunda mitad

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax); // Retornar el máximo entre leftMax y rightMax
}

const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); 
