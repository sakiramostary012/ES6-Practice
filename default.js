function add(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    num1 = num1 || 0;
    return num1 + num2;
}

const total = add();
console.log(total);