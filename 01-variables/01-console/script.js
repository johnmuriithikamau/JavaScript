function registerUser(user) {
    return user + 'is registered'
}

console.log(registerUser('John '))

// Rest Params
function sum(...numbers) {
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3));

// object as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
    id: 1,
    name: 'John', 
};
console.log(loginUser(user));