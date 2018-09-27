const a = [1, 2, 3, 4, 5]

function wrap() {
  let res = null;
  const asyncAdd = function(num) {
    console.log(num)
    res += num;
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve(res)
      }, 1000);
    })
  }
  return asyncAdd
}

let asyncAdd = wrap()

a.reduce((cur, a) => {
  if(typeof cur === 'number') {return asyncAdd(cur + a).then(val => val)}
  return cur.then(_ => asyncAdd(a))
}).then(console.log)
