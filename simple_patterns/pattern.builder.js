class PersonBuilder {
  constructor() {
    this.city = null;
    this.car = null;
    this.job = null;
    this.name = null;
  }

  addCity(city) {
    this.city = city;
    return this;
  }

  addCar(car) {
    this.car = car;
    return this;
  }

  addJob(job) {
    this.job = job;
    return this;
  }

  addName(name) {
    this.name = name;
    return this
  }

  generate() {
    const fileds = Object.getOwnPropertyNames(this)
    let data = ''
    fileds.forEach((fieldName) => {
      if(this[fieldName]) {
        data += `${fieldName}: ${this[fieldName]} \t`
      }
    })

    return data;
  }
}

const pb = new PersonBuilder();
const person = pb
  .addCar('Toyota')
  .addJob('QA')
  .generate()

console.log(person)