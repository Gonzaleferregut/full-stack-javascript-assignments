let Cat = function(name, color){
  this.name = name;
  this.color = color;
}

export default {
  stringObj: new String('Hello world'),
  myString: 'Hello world',
  myNum: 1,
  myDecimal: 0.02,
  myFloat: 0.1,
  myFloat2: 0.2,
  myArrowFn: null,
  myObj: {},
  Cat: {},
  Fluffy: new Cat('Fluffy', 'white')
};
