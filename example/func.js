function test(arg1, arg2) {
  const arg3 = arg1 + arg2
  return arg3
}

function globItem() {
  const number1 = 10
  const nuber2 = 22
  const resulter = test(133, nuber2)
  console.log(resulter);
}

globItem()