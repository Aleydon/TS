// Use pipe to create a union type

let userID: string | number;

userID = 'Aleydon';
console.log(`User name: ${userID} |`, typeof userID);

userID = 29;
console.log(`User ID: ${userID} |`, typeof userID);
