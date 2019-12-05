const firstArray = [
  { itemName: 'Samsung A 1', price: 100 },
  { itemName: 'Samsung A 2', price: 200 },
  { itemName: 'Samsung A 3', price: 300 },
  { itemName: 'Samsung A 4', price: 400 },
  { itemName: 'Samsung A 5', price: 500 }
]

/*
const resultForEach = firstArray.forEach(function (item) {
  console.log(item.itemName)
})

console.log(resultForEach)
*/

/*
const resultMap = firstArray.map(function (item) {
  return item.price
})

console.log(resultMap)
*/

/*
const filterResult = firstArray.filter(function (item) {
  if (item.price > 300) {
    return true
  } else {
    return false
  }
})

console.log(filterResult)
*/
/*
const reduceResult = firstArray.reduce(function (acc, item) {
  acc += item.price
  return acc
}, 0)

console.log(reduceResult)
*/

/*
const reduceResultToObject = firstArray.reduce(function (acc, item) {
  acc[item.itemName] = item.price
  return acc
}, {})

console.log(reduceResultToObject)
*/