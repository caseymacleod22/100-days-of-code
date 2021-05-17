// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord(word) {
    const letters = /[a-z]/g
    const lowerCase = word.match(letters)
    return lowerCase.join('')
}

console.log(detectWord('KJHaHLJJpJHpIJKHVNMlIUYIUBEe'))


function isTrue(relation) {
    return eval(relation.replace('=', '==='))
}

console.log(isTrue('2 > 3'))


function addUp(num) {
    return (num * (num+1))/2
}

// console.log(addUp(4))