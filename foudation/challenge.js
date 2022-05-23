// Função Range
const range = (a, b, s) => {
    let array = []
    let n1 = b === undefined ? 1 : a;
    let n2 = b === undefined ? a : b;
    let n3 = s === undefined ? 1 : s;

    if (b > a || b === undefined) {       
        for(let i = n1; i <= n2; i += n3) {
            array.push(i);
        }        
    } else {
        for(let i = n1; i >= n2; i -= n3) {
            array.push(i);
        }        
    }
    
    console.log(array)
}

range(5)
range(6,11)
range(10,19,2)
range(6,2)
