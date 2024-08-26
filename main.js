function carry(a){
    return function(b){
        return a * b;
    };
};

const carry17 = carry(17);
console.log(carry17(17));
