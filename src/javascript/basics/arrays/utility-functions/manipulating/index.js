const developer = { name: 'Tyler', age: 34 };
const constructionWorker = { name: 'Bob the Builder', age: 20 };
const actor = { name: 'Chris Farley', age: 39 };

export const people = [];
people.push(developer, constructionWorker, actor);

export const getDevelopersWithSlice = () => {
  return people.slice(0, 1);
}

export const getConstructionWorkersWithSlice = () => {
  return people.slice(1, 2);
}

export const getActorsWithSlice = () => {
  return people.slice(2, 3);
}

export const getDeveloperWithShift = () => {
  return Array.from(people).shift();
}

export const getActorWithPop = () => {
  return Array.from(people).pop();
}

export const numbers = [].concat(1, 2, 3);

export const numbersAsString = numbers.join();

export const countdown = Array.from(numbers).reverse();

export const names = people.map(function() {
  return developer.name;
})

export const peopleWithGender = people.map(function(person) {
  return Object.assign(person, {gender: 'male'});
})
