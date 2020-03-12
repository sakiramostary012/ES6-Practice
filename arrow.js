// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (a, b) => a + b;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result4 = doMath(7, 5);
console.log(result4);

const result3 = give5();
console.log(result3);

const result2 = add(2, 5);
console.log(result2);

const result =  doubleIt(10);
console.log(result);


