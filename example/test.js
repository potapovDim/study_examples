const mensNames = ['Maksim', 'Ivan', 'Kolya', 'Sergey'];
const womensNames = ['Natasha', 'Svetlana', 'Katya', 'Ira'];
const tenthFormAge = 16;

const class10b = [];
const children = ['Maksim', 'Ivan', 'Natasha', 'Kolya'];

const userExample = {
  age: 10,
  name: 'Sasha',
  // secondName: 'Boyko',
  // address: 'Kolomyiskiy lane 17/31a',
  sex: 'FM'
};

function createNewPupilGirl(age, name, secondName, address) {
  return {
    age,
    name,
    // secondName,
    // address,
    sex: 'FM'
  }
}

function createNewPupilBoy(age, name, secondName, address) {
  const item = {age, name, sex: 'M'}
  return item;
}

function forEachIterate(childName) {

  let expetedPupil = null
  // mensNames.includes(childName) -> bool
  if(mensNames.includes(childName)) {

    expetedPupil = createNewPupilBoy(tenthFormAge, childName)

  } else if(womensNames.includes(childName)) {

    expetedPupil = createNewPupilGirl(tenthFormAge, childName)

  } else {
    console.log('Something went wrong with that name')
    return;
  }

  class10b.push(expetedPupil);
}

children.forEach(forEachIterate)

console.log('Наш класс', class10b)

const boysPartFromClass10b = class10b.filter(function(pupilObject) {
  console.log(pupilObject.sex, pupilObject.sex === 'M')
  return pupilObject.sex === 'M';
})

console.log(boysPartFromClass10b)