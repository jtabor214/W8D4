class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

  Function.prototype.myBind = function () {
    let args = Array.from(arguments)
    let that = this; 

    return function () {
        let allArgs = args.concat(Array.from(arguments))
        return that.apply(allArgs[0], allArgs.slice(1));
    }
  };

//   Function.prototype.myBind = function(ctx, ...args) {
//     // this.myBind (cArgs is what we want to bind to)
//     return function(...cArgs) {
//         return this.apply(ctx, ...args.concat(cArgs)); 
//     }
// };

// Function.prototype.myBind = function(ctx, ...bArgs) {
//     // ctx === instance of clock
//     // this._tick.bind(this)
//     // this is pointing to the instance of clock
//     // setInterval(cb, 1000)
//     // cb are always invoked function style
//     // context becomes the window
  
//     // how do we preserve context?
//     // const that = this
//     // utilize bind ES5 
//     // arrow function, they do not reset context
//     const that = this;
  
//     return function(...cArgs) {
//       return that.apply(ctx, bArgs.concat(cArgs));
//       // apply, array
//       // call, comma separated
//       // you as a person
//     }
//     // the blanket 
//   }