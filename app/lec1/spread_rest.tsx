// 1. Spread operator 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // Kết hợp hai mảng thành một mảng mới
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

const obj1 = { name: "Dung", age: 12 };
const newObj = { ...obj1, city: "Hanoi" }; // Tạo một đối tượng mới bằng cách sao chép obj1 và thêm thuộc tính city
console.log(newObj); // { name: "Dung", age: 12, city: "Hanoi" }


// 2. Rest operator
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]


// 3. Ví dụ với React
import { useState } from 'react';

const [user, setUser] = useState({ name: "Dung", age: 12 });
const updateUser = () => {
  setUser(prevUser => ({ ...prevUser, age: 13 })); // Cập nhật tuổi của user mà không làm mất thuộc tính name
}