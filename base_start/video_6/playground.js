const arr = [
  { getText() { return Math.random() } },
  { getText() { return Math.random() } },
  { getText() { return Math.random() } },
  { getText() { return Math.random() } },
]

const arrGetTextValues = arr.map(function (item) {
  return item.getText()
})

console.log(arrGetTextValues)