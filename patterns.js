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


// pub-sub
const pubSub = (function() {
  const subscribers = {}
  return {
    subscribe: function(action, listener) {
      if(!subscribers[action]) {subscribers[action] = []}
      const index = subscribers[action].push(listener) - 1

      return {
        remove: function() {
          subscribers[action].splice(index, 1)
        }
      }
    },
    publish: function(action, data) {
      if(!subscribers[action]) return
      // execute action
      subscribers[action].forEach(function(subscriber) {
        subscriber(data)
      })
    }
  }
})()

const logger = pubSub.subscribe('log', function(data) {console.log(data, 'log')})



pubSub.publish('log', {item: 1})
