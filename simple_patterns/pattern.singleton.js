class ShouldBeSingle {
  constructor(name) {

    if(ShouldBeSingle._instance) {
      return ShouldBeSingle._instance;
    }

    this.name = name

    ShouldBeSingle._instance = this;
  }

  method1() {
    console.log('one', this.name)
  }
}

const a = new ShouldBeSingle('test');
const b = new ShouldBeSingle('test')

console.log(a === b)