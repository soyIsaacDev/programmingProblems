// Serie de Fibonacci

function fibonacci () {
    var array = [1,1];
    for (let i = 1; i < 100; i++) {
        n = array[i] + array[i-1];
        array.push(n);
    }
    console.log(array);
    return array;
}

fibonacci();