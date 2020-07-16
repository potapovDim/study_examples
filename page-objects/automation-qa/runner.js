const tests = [];
const suits = [];


function beforeTest() {

}

function afterTest() {

}


function test(cb, testBody) {
  testBody
}




function suite(description, cb) {



  suits.push({
    description,
    cb
  })
}

async function run(protractorRunner, specs) {
  console.log(specs)
  console.log(protractorRunner)
  return Promise.resolve({failedCount: 0})
}

module.exports = {
  run
}