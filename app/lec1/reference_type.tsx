// ReferenceType

const a = { name: "Alice" };
const b = a

console.log(a === b); // true

b.name = "Bob";
console.log(a.name); // Bob

// bởi vì a và b cùng tham chiếu đến một object trong bộ nhớ, nên khi thay đổi thuộc tính của object thông qua b,
//  thì a cũng sẽ thấy sự thay đổi đó.