/*
console.log(__dirname)
console.log(__filename)
*/

setTimeout(() => {
  console.log('Hello')
}, 1)

const currentTimeInMs = Date.now()

for(let i = 0; i < 100000; i++) {
  console.log(i)
}

console.log(Date.now() - currentTimeInMs)
