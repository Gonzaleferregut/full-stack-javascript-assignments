export const _name = Symbol('name');
export const _age = Symbol('age');

export class person {
  constructor(name, age) {
    this[_name] = name,
    this[_age] = age
  }

  get name() {
    return this[_name];
  }

  get age() {
    return this[_age];
  }

  set age(value) {
    if(value < 0) {
      this[_age] = 0;
    } else if(value >= 120) {
      this[_age] = 120;
    } else {
      this[_age] = value;
    }
  }
}

let person1 = new person('Tyler');
person1.name = 'Thor';
console.log(person1.name);
