// singlton JS
function singlton() {
  let instance = null
  return function() {
    this.image = 'test'
    if(!instance) {
      instance = this
    } else {
      return instance
    }
  }
}

const initSington = singlton()

const instance1 = new initSington()
const instance2 = new initSington()

console.log(instance1, instance2, instance1 === instance2)

// observable
function Observable() {

  this.observers = []

  this.addObserver = function(item) {
    this.observers.push(item)
  }

  this.next = function(handler, data) {
    for(let i = 0; i < this.observers.length; i++) {
      const caller = this.observers[i][handler]
      if(caller) {caller(data)}
    }
  }
}


// factory
function Factory() {
  this.getEmployee = function(name, title) {
    return new Employee(name, title)
  }
}


