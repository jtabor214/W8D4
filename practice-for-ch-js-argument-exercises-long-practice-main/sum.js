function sum(...num){
    let total = 0 
        for (let i = 0; i < num.length; i++){
            total += num[i]
        }
    return total
};

console.log(sum(1, 2, 3));

