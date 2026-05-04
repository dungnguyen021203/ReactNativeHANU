// Destructuring
const person = { name: "Dung", age: 12, city: "Hanoi" };

// Old way
const name = person.name;
const age = person.age;
const city = person.city;

// New way - Destructuring
const { name: name1, age: age1, city: city1 } = person;

console.log(name1); // Dung
console.log(age1); // 12
console.log(city1); // Hanoi


// Bỏ qua phần tử


// Destructuring với mảng


// Kết hợp với rest