// Read https://tech-docs.corndel.com/js/arrays.html first!

/**
 * Returns the sum of the first and last elements of the array.
 *
 * e.g. [4, 1, 9, 5, 2] => 6
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The sum of the first and last elements.
 */
export function firstAddLast(nums) {
  // TODO: find the array of numbers, add first and last value together to return result
  // (get first value, get last value, then sum)
  // array of number is "nums" function (line 11)
  //console.log(nums)

    const firstValue = nums[0]
    //console.log(firstValue)
    const lastValue = nums[4]
    //console.log(firstValue)
    const result = firstValue + lastValue // 4+2=6
    return result 
}

//test:
let testArray = [4, 1, 9, 5, 2] // define numbers
let result = firstAddLast(testArray) //create variable "result" that is function firstaddlast 
console.log(result) // print "nums" to terminal

/* example of length (not using 4 as in not using the 4th value)
const firstValue = nums[0]
const lastValue = nums[nums.length - 1]
const result = firstValue + lastValue 
return result
*/

// next part is handling negative numbers