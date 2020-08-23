class Parent {
  constructor() {

  }

  parentMethod() {
    console.log(this.b)
  }
}


class SomeClass extends Parent {
  constructor() {
    super()
    this.a = 10
    this.b = 12
  }

  method1() {
    console.log(this.a)
  }
}


function ES5Parent() {

}

ES5Parent.prototype.parentMethod = function() {
  console.log(this.b)
}

function ES5omeClass() {
  ES5Parent.call(this);
  this.a = 10;
  this.b = 12;
}

ES5omeClass.prototype = Object.create(ES5Parent.prototype);
ES5omeClass.prototype.constructor = ES5omeClass;

ES5omeClass.prototype.method1 = function() {
  console.log(this.a)
}

const es6someClass = new SomeClass()
const es5someClass = new ES5omeClass()

es6someClass.method1()
es6someClass.parentMethod()
console.log('______________ ES 5')
es5someClass.method1()
es5someClass.parentMethod()