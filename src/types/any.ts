// Any type is not advisable to use because it's not type-safe
const hello: any = 'Hello';

// If a type is not declared, any type is automatically passed
const anyType = 29;

console.log(`${hello} ` + typeof hello);
console.log(`${anyType} ` + '' + typeof anyType);
