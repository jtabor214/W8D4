Function.prototype.inherits = function(Parent){
    function Surrogate () {}
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

// child.inherits(Parent)
// this.inherits(Parent)