function accumulator() {
    sum = 0;

    return function(value){
        sum += value;
        return sum;
    }
}

const acc = accumulator();

console.log(acc(5));
console.log(acc(7));
console.log(acc(12));
console.log(acc(22));
console.log(acc(7));
console.log(acc(7));


