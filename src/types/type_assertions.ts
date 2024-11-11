// Indicating that the current Status is in fact of type number

const currentStatus: unknown = 1;
const changeStatus: number = currentStatus as number;

console.log(changeStatus);
console.log(typeof changeStatus);
