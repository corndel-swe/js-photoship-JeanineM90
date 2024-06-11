// https://tech-docs.corndel.com/js/array-slice.html

/**
 * Returns the middle elements of the array, without the first and last
 * elements.
 *
 * e.g. [4, 6, 1, 7, 9] => [6, 1, 7]
 *
 * @param {Array} arr - The array to process
 * @returns {Array} The array containing only the middle elements
 */
export function getMiddle(arr) {
  // TODO:
 //const middleValue = arr
 //const result = middleValue.slice(1,3)
 //return result

const result = arr.slice(1,3)
return result

//const result = arr.slice(1, arr.length -1)
//const result = arr.slice(1, -1) // example 2
//return result

}

const testArray = [4, 6, 1, 7, 9]
const result = getMiddle(testArray)
console.log(result)

//example is console.log(books.slice(1, 4))
//so console.log(arr.slice(1, 3))

