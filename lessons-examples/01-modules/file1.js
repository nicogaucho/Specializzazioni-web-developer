// SCOPE JS
// costituisce il dove e il quando viene eseguito un certo codice javascript
  // Scope global
    // posso usare il codice da ovunque
  // File/module scope
    // posso usare il codice solo da dentro il modulo o file
  // Function/Block scope
    // posso usare il codice da dentro un blocco di codice
      /* if (condition) {
          code block
        }
        function name(params) {
          code block
        } */

// Named export
export const message = "HELLO WORLD!";

export function add(x, y) {
  return x + y
};

export function subtract(x, y) {
  return x - y
};

export function multiply(x, y) {
  return x * y
};

