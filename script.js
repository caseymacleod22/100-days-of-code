/////// ROSETTA CODE: 100 DOORS ///////

/* 
create an array with 100 doors, represented by a boolean value
create a counter starting at 1 that increments once with each iteration
if the counter is < or = to the number of doors:
    create another loop that iterates over the doors
    change the boolean value for each door
    increment the counter by 1
*/

function getFinalDoor(doors) {
    // create the doors array

    let doorsArray = Array(doors).fill(false)

    let counter = 1
    while (counter <= doors) {
        for (i =counter; i <= doors; i += counter) {
            doorsArray[i] = !doorsArray[i]
        }
        counter += 1
    }

    let doorNumbers = []
    for (i = 0; i <= doors; i++) {
        if (doorsArray[i] === true) {
            doorNumbers.push(i)
        }
    }
    return doorNumbers
}

console.log(getFinalDoor(100))
