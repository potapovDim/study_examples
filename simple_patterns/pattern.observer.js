function Objeserver() {
  let obs = [];

  return {
    subscribe(handler) {

      obs.push(handler)

      return {
        unsubscribe() {
          obs = obs.filter((fn) => fn !== handler)
        }
      }
    },
    publish(data) {
      obs.forEach((handler) => {
        handler(data)
      })
    }
  }
}

const newObserver = Objeserver()

const first = newObserver.subscribe(({field}) => {
  if(field === 1) {
    console.log('Yes it is one')
  }
})

const second = newObserver.subscribe(({dataFiled}) => {
  if(dataFiled) {
    console.log('Yes it is data field')
  }
})

const third = newObserver.subscribe(({superFiled}) => {
  if(superFiled) {
    console.log('Yes it is supper field')
  }
})

newObserver.publish({field: 1, superFiled: 2})
console.log('\n\n')
newObserver.publish({field: 1, superFiled: 2, dataFiled: true})
console.log('\n\n')

first.unsubscribe()
second.unsubscribe()

newObserver.publish({field: 1, superFiled: 2, dataFiled: true})
