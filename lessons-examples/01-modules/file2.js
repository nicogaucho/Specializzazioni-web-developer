import { message, add } from "./file1.js";
import Operations from "./defaultexport.js";

console.log(message);

console.log(add(42, 2));

console.log("Somma da operations: ", Operations.sum(42, 2));

