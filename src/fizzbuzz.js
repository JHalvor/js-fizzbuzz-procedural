const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const answer = []

// Write your code below this line
numbers.forEach(element => {
    if (element % 15 == 0) {
        answer.push('FizzBuzz')
    } else if (element % 5 == 0) {
        answer.push('Buzz')
    } else if (element % 3 == 0) {
        answer.push('Fizz')
    } else {
        answer.push(element)
    }
});




// Don't touch the code below this line, we'll cover it later
module.exports = answer
