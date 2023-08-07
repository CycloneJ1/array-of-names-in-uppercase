const students = [
  {
    name: 'alice',
    city: 'paris',
  },
  {
    name: 'bob',
    city: 'tokio',
  },
  {
    name: 'charly',
    city: 'berlin',
  },
];
const name = students.map(function(person) {
//  return person.name;
  return person.name.toUpperCase();
});

console.log(name)