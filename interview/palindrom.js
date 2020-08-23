const str = 'testtest';


function isPalindrome1(strArg) {
  const lowerStr = strArg.toLowerCase();

  return lowerStr === strArg.toLowerCase().split('').reduceRight(
    (acc, item) => {
      acc = acc + item;
      return acc;
    }
    , '')
}


function isPalindrome2(strArg) {
  const lowerStr = strArg.toLowerCase();
  let strToAssert = ''

  for(let i = lowerStr.length - 1; i >= 0; i--) {
    strToAssert = strToAssert + lowerStr[i];
  }
  return lowerStr === strToAssert;
}


function isPalindrome3(strArg) {
  const lowerStr = strArg.toLowerCase();
  const arr = lowerStr.split('');
  const reversed = [];
  for(let i = lowerStr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }

  return lowerStr === reversed.join('');
}

console.log(isPalindrome1(str))
console.log(isPalindrome1('aba'))

console.log(isPalindrome2(str))
console.log(isPalindrome2('aba'))

console.log(isPalindrome3(str))
console.log(isPalindrome3('aba'))