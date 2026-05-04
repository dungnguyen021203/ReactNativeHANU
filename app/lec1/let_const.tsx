import { useState } from "react";

// We use let and const instead of var to declare variables in TypeScript.
// var có phạm vị toàn cục (global scope) và phạm vi hàm (function scope)
//   - TH1: Nếu khai báo trong 1 khối if hoặc for, biến đó có thể được truy cập bên ngoài và có thể bị ghi đè (reassign)
var x = 10;
if (true) {
  var x = 20; // Ghi đè biến x
}

//   - TH2: Nếu khai báo var ở đầu file, nghĩa là bạn có thể gọi biến trước khi khai báo (sẽ trả về undefined)
console.log(y); // undefined
var y = 30;


// "let" dùng cho biến có thể thay đổi, chỉ sống trong dấu ngoặc nhọn (block scope)
let a = 10;
if (true) {
  let a = 20; // Đây là một biến khác, không ghi đè biến a bên ngoài
  console.log(a); // 20
}

// "const" dùng cho biến không thể thay đổi, cũng chỉ sống trong dấu ngoặc nhọn (block scope)
// bắt buộc phải gắn giá trị khi khai báo và không thể gán lại sau đó
const [status, setStatus] = useState('Hello'); // Đây là một ví dụ về cách sử dụng const với useState trong React


