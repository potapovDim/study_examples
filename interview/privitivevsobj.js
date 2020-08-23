function modify(obj) {
  obj.x = 12
}


const testObj = {a: 12, b: 12};

modify(testObj);

console.log(testObj)


function modifyPrimitives(arg) {
  arg += ' test'
}

const str = 'abc';
// str += '11';

modifyPrimitives(str)
