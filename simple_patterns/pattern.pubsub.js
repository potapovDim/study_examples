const pubsub = (function() {
  const eventPool = {}

  return {
    subscribe(messageName, messageDataHandler) {
      if(eventPool[messageName]) {
        eventPool[messageName].push(messageDataHandler)
      } else {
        eventPool[messageName] = [];
        eventPool[messageName].push(messageDataHandler)
      }
      return {
        unsubscribe() {
          eventPool[messageName] = eventPool[messageName].filter((handler) => handler !== messageDataHandler)
        }
      }
    },
    publish(messageName, messageData) {
      if(!eventPool[messageName]) {
        return;
      } else {
        eventPool[messageName].forEach((handler) => {
          handler(messageData)
        })
      }
    }
  }
})()

const first = pubsub.subscribe('event1', (data) => {console.log(data)})
const second = pubsub.subscribe('event2', (data) => {console.log(data)})
const third = pubsub.subscribe('event1', (data) => {console.log('Third', data)})

pubsub.publish('event1', {hello: 'test'});
pubsub.publish('event2', {hello2: 'test2'});

console.log('\n\n\n\n')
third.unsubscribe();
first.unsubscribe();

pubsub.publish('event1', {hello: 'test'});

