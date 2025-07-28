// tecnica per estrarre valori da proprietà presenti di strutture di dati javascript e inserirle in variabili

const utente = {
  status: "authenticated",
  email: "nico@gmail.com",
  favoriteFood: {
    veg: {
      type: "potatos"
    },
  },
  animals: {
    type: "dog",
    name: "Panzer",
    age: 3
  }
};


// const email = utente.email;
// const veggieType = utente.favoriteFood.veg.type;
// console.log(email);
// console.log(veggieType);

const { email } = utente;
console.log(email);

// const { favoriteFood: { veg: { type } } } = utente;
// console.log(type);

const { veg: { type } } = utente.favoriteFood;
console.log(type);

// rename property name
// const { favoriteFood: { veg: { type: tipo } } } = utente;
// console.log(tipo);

const array = ["🍕", "🍝", "🍰"];

// const pizza = array[0];
// const spaghetti = array[1];
// const torta = array[2];

// const [ pizza, spaghetti, torta ] = array;

// console.log(pizza);
// console.log(spaghetti);
// console.log(torta);

// REST OPERATOR, per destrutturare la parte restante di un array
const [ pizza, ...rest] = array;

// console.log(pizza);
// console.log(rest);

// SPREAD OPERATOR, si usa tipicamente per creare copie
const copyArray = [...array];
console.log(array);
console.log(copyArray);







