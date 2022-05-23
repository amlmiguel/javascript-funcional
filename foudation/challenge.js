// 1
const firstFunction = (a) => {
    let array = [];
    for(let i = 1; i <= a; i++) {
        array.push(i);
    }
    console.log(array)
}
firstFunction(5);

//2
const secondFunction = (a,b) => {
    let array = [];
    if (a < b) {
        for(let i = a; i <= b; i++) {
            array.push(i);
        }    
    } else {
        for(let i =b; i <= a; i++) {
            array.push(i);
        }
    }
    console.log(array)
}
secondFunction(6,11);

//3
const thirdFunction = (a,b,c) => {
    let array = [];
    if (a < b) {
        for(let i = a; i <= b; i += c) {
            array.push(i);
        }    
    } else {
        for(let i = b; i <= a; i += c) {
            array.push(i);
        }
    }
    console.log(array)
}
thirdFunction(10,19,2);

//4
const forthFunction = (a,b) => {
    let array = [];
    if (a < b) {
        for(let i = b; i >= a; i--) {
            array.push(i);
        }    
    } else {
        for(let i = a; i >= b; i--) {
            array.push(i);
        }
    }
    console.log(array)
}
forthFunction(6,2);
