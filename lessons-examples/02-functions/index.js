// doThings(2);
// function definition
function doThings(x) {
  console.log(x);
};


// Non subiscono il meccanismo di hoisting JS
// function declaration / function expression
const add = function(a, b) {
  console.log(a + b);
};

add(42, 2);

// arrow function
const sum = (a, b) => {
  return a + b;
};