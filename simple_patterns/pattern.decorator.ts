function declare(message: string | Function) {
  return function(_target, propName, descriptor) {
    const orFn = descriptor.value;

    descriptor.value = function(...args) {
      message = typeof message === 'function' ? message(this.name) : message;
      console.log(message);
      console.log('ARGS: ', ...args);
      const result = orFn.call(this, ...args)
      console.log('RESULT: ', result)
      return result;
    }
    return descriptor;
  }
}

class PageA {
  name: string
  constructor(name) {
    this.name = name;
  }

  @declare('SUMMM')
  method1(a, b) {
    return a + b
  }

  @declare((name) => `${name} execute some action`)
  method2(a, b) {
    return a - b;
  }
}


const pageA = new PageA('test page')


console.log(pageA.method1(2, 3))
console.log(pageA.method2(4, 2))


