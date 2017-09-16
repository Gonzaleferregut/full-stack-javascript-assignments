for (let i = 0; i < 11; i++) {
  console.log(i);
}

const people = ['Bob', 'Billy', 'Aaron', 'Jimmy', 'Gerald'];
people.forEach(p => console.log(p));

for(let p of people) {
  console.log(p);
}

// 2. Each piece of code gets used by the function once. For both that means each 'p' gets logged
// in the console on their own line.

const person = { name: 'Bob', age: 25, isHappy: true };

for(let p in person) {
  console.log(p);
}

// 1. The difference between is of and in, in the for loops.
// for...in loops over keys in an object.
// for...of loops over values of keys in an object.

let number = 0;
while(number < 10) {
  console.log(number);
  number++;
}

// 1. This piece of code printed numbers 0-9.
// while the number was less than 10 it continued
// to log the number in the console.

// 1. foreach is a method for arrays and executes
// the callback to the function for each element once.

// 2. You would use a while loop when you do not know the
// number of times you may want the loop to run. Where in
// a for loop you know the numbers of loops you may need.

// 3. The difference between while and do while is
// that a while loop will only execute the code block
// while a condition is true. Where a do while loop will
// execute the code block once before the condition comes
// into play, then it will act the same as a while loop.
// Guarenteed to run loop once. Do THIS, then while a condition
// is true run the code block.
