const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 2000)
});
(async () => {
  try {
    console.log(await promise)
  } catch(e) {
    console.log(e)
  }
})()