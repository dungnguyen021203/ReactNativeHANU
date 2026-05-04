// Normal function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const addArrow = (a: number, b: number): number => {
  return a + b;
}
const addArrow1 = (a: any, b: any) => a + b; // Implicit return

const printMyName = (name: string) => console.log(name);
printMyName("John Doe");