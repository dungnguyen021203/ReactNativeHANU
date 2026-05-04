// Export and Import

export const name = 'John Doe';

export function greet() { 
  return `Hello, ${name}!`;
}

// Mỗi 1 file chỉ có thể có 1 export default, nhưng có thể có nhiều export thường (named export)
export default function Lect1d() {
  return (
    <div>
      <h1>Export và Import trong TypeScript</h1>
      <p>Trong file này, chúng ta đã export một biến name và một hàm greet. Chúng ta cũng export một component mặc định Lect1d.</p>
    </div>
  );
}
