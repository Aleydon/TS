/* eslint-disable array-callback-return */
const users: string[] = ['Roberto', 'Aleydon'];
const numbersAndStrings: Array<number | string> = [1, 'Fernanda', 2, 'Maria'];

console.log(users);
console.log(numbersAndStrings);

users.push('Heather');
console.log(users);

users.map((users, index) => {
	console.log(`Index: ${index} Name: ${users}`);
});

console.log('\n');

numbersAndStrings.map((value, index) => {
	console.log(`Index: ${index} Value: ${value}`);
});
