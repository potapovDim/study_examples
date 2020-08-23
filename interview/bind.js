function test(...args) {
  console.log(this, ...args)
}

test()

test.call({a: 1}, 1, 2, 3, 4)
test.apply({a: 2}, [5, 6, 7, 8])

const binded = test.bind({test: 1}, 'test', 'test')
binded()
binded(1, 2, 3, 4, 5)

Function.prototype.__ownBind = function(ctx, ...args) {
  const that = this;
  return function(...argsSecond) {
    return that.apply(ctx, [...args, ...argsSecond]);
  }
}

const ownBinded = test.__ownBind({ownThis: 10}, '4', '5')
ownBinded(2, 3, 4, 5, 6, 7)


function a() {
  return 'x'
}

a.valueOf = function() {
  return '10'
}

console.log(a == '10')