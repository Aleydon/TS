// Type Enum does not exist in Javascript
// Type Enum and to enumerate data types
// Enum is a collection of named constants

enum color {
	red = 1, // Assigning that the first value started with the number 1
	white = '#FFFFFF',
	black = '#000000'
}

// Get values 0 and 1
enum statusPermission {
	Admin,
	User
}

console.log(color.red);
console.log(color.white);
console.log(color.black);

console.log(statusPermission.Admin);
console.log(statusPermission.User);

console.log(typeof color.white);
console.log(typeof statusPermission.Admin);
console.log(typeof statusPermission);
