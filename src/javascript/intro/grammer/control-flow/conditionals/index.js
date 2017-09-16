export const greeting = (age = 0) => age > 18 ? "Hello!" : "Yo!";

export const isTacoTuesday = (day = '') => {
  let foo = day.toLowerCase();
  switch (foo) {
    case 'monday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday':
      return false;
      break;
    case 'tuesday':
      return true;
      break;
    default:
      return day + ' is not taco tuesday!';
  }
};
