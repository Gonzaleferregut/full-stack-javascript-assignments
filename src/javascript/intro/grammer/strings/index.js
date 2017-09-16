export const greeting = 'Hello World';
export const characterAt = greeting[4];
export const greetingArray = greeting.split('');
export const begins = (str, char) => {
  return str.startsWith(char);
}
export const beginsInsensitive = (str, char) => {
  return str.startsWith(char.toUpperCase());
}
