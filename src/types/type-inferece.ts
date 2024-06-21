// variables with values, the types are already recognized

const stringVarRecognized = 'Hello'; // string recognized
const stringVarDeclared: string = 'World'; // declaring constant type

console.warn(`${stringVarRecognized} ${stringVarDeclared}`);

const technologies = ['TypeScript', 'JavaScript']; // technologies only accept strings

technologies.push('React');
console.log(technologies);

const stringsAndNumbers = ['Roberto', 'Aleydon', 29]; // this array only accept strings and numbers

stringsAndNumbers.push(1995);
console.log(stringsAndNumbers);
