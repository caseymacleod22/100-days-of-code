// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    return[Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([123, 45, 646, 24, 5656, 129, 45, 348]))


// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

function sortAscending(arr) {
    if (arr === null || arr === [] || arr === undefined) {
        return []
    } else {
    return arr.sort()
    }
}

console.log(sortAscending([4, 8, 2, 9, 6, 1]))



// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function secretSociety() {
    const members = ['Jerry', 'George', 'Cosmo', 'Elaine']
    let alphabetical = members.sort()

    return alphabetical.map((member) => member[0]).join('')
}

console.log(secretSociety())