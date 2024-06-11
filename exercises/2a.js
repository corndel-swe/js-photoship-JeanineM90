// https://swe-docs.netlify.app/js/array-push-pop.html

/**
 * Given an array, take the last element and put it on the front
 *
 * e.g. ['x', 'y', 'z'] => ['z', 'x', 'y']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with the last element at the front
 */
export function arrayRotate(arr) {
  // TODO

const lastValue = arr.pop()
arr.unshift(lastValue)
return arr
}


//TEST
const testArray = ['x', 'y', 'z']
const result = arrayRotate(testArray)// define pop e.g const lastAuthor = authors.pop()
console.log(result)

// We can use .push() to add a new item to the end of the array, whereas .unshift() adds an item to the beginning.
// The .pop() method will remove and return the final item of the array, whereas .shift() removes and returns the first item.
// Use POP then UNSHIFT 
// E.G:
// const lastAuthor = authors.pop()
// authors.unshift('Sandra Cisneros') // add to the beginning

