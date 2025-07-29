// Rifattorizza queste funzioni
// List:
  // template strings da sostituire con + concatenazione di strings
  // Eliminare l'uso di var da sostituisci con con let o const
  // Sostituire l'uso di function keyword dove possibile con arrow functions
  // Sostituire dot syntax con desctructuring
  // uso di moduli con import, export per clean code

const getEmails = (people, options) => {
  options = options || {}
  const withNames = options.withNames || false
  const onlyActive = options.onlyActive || false
  if (onlyActive) {
    people = people.filter(isActive)
  }
  return people.map(({ name, email }) => {
    let result = '';
    (withNames) ? result = `${name} <${email}>` : result = email
    return result
  }).join(', ')
}

const getYoungest = (people) => {
  const [youngest, ...others] = people.sort((personA, personB) => {
    return personA.age - personB.age
  });
  return {
    youngest,
    others
  }
}

const isActive = (person) => person.isActive;

// aggiungi questo array in un altro file e importalo!
const people = [
  {
    id: '0',
    isActive: true,
    age: 24,
    name: 'Eva',
    address: {
      via1: '23, via toritto',
    },
    email: 'eva.sweet@beadzza.com',
    location: {
      latitude: 45.718105,
      longitude: -155.472722,
    }
  },
  {
    id: '1',
    isActive: true,
    age: 55,
    name: 'Teresa', 
    address: {
      via1: '23, via trento',
    },
    email: 'terry@magmina.com',
    location: {
      latitude: -87.04779,
      longitude: 6.978688,
    },
  },
  {
    id: '2',
    isActive: true,
    age: 53,
    name: 'Marcello',
    address: {
      via1: '23, via toscana',
    },
    email: 'Marcello@splinx.com',
    location: {
      latitude: 15.98262,
      longitude: -137.86649,
    },
  },
  {
    id: '3',
    isActive: false,
    age: 54,
    name: 'Federico',
    address: {
      via1: '181, via giardino dorato',
    },
    email: 'frederick.stokes@telpod.com',
    location: {
      latitude: -6.323152,
      longitude: 50.381855,
    },
  },
  {
    id: '4',
    isActive: false,
    age: 37,
    name: 'Davide',
    address: {
      line1: '701, via bari',
    },
    email: 'david.richmond@sulfax.com',
    location: {
      latitude: 28.723604,
      longitude: 177.048793,
    },
  }
];

// dopo il refactoring queste funzioni dovrebbero continuare a funzioare
const emails = getEmails(people, {
  onlyActive: true,
});
console.log(emails);

const youngest = getYoungest(people);
console.log(youngest);