console.log("A");

setTimeout(() => {
  console.log("B");
}, 7000);

setTimeout(() => {
  console.log("C");
}, 5000);

console.log("D");

await new Promise((resolve) => setTimeout(resolve, 1000));

console.log("E");


