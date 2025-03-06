// Random TypeScript code
const randomNumber = Math.floor(Math.random() * 10) + 1;

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

interface Person {
  name: string;
  age: number;
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

function getPersonInfo(person: Person): string {
  return `${person.name} is ${person.age} years old.`;
}

console.log(getPersonInfo(getRandomElement(people)));
