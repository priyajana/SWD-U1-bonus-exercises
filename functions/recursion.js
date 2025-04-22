/** RECURSION **/

// What do you do when you need to traverse an array that 
// has an unknown number of levels of nested arrays and elements?

// DIVIDE & CONQUER!

// Each number in the data structure below represents the number of items in an individual box.
// There are boxes of boxes.
// In some cases there are boxes of boxes of boxes.

let itemsToUnpack = [
    [2, 6, 8, [1, 9]],
    [[3, 4, 2], [14, 8], 22],
    [15, [5, 8], 2, [25, 7]]
];

// EXAMPLE: Use recursion to count up all the items in all the boxes!

function countNestedItems(data) {
    // console.log(data);
	if (typeof data === "number") {
		// console.log(`Adding the number ${data} to the count.`);
		return data;
	}
	if (data.length === 0) {
		// console.log("Empty array found.");
		return 0;
	}
	// console.log("Recursing...");
	return countNestedItems(data.shift()) + countNestedItems(data);
}

// EXAMPLE: Call the function with the test data
console.log(countNestedItems(itemsToUnpack));
