Function.prototype.curry = function(numArgs) {
    let result = []
    let that = this

    return function myCurry(ele) {
        result.push(ele); 
        if (result.length < numArgs) {
            return myCurry;
        } else {
            return that.apply(null, result)
        }
    }
};



function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
  f1 = f1(4); // [Function]
  f1 = f1(20); // [Function]
  f1 = f1(6); // = 30
  
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
