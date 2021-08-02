"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
    const result = [];

    for (const i in items) {
        if (i%2 === 0) {
            result.push(items[i]);
        }
    }

    console.log(result)

}


function smallestNItems(items, n) {
  let sortedItems = items.sort((a, b) => a - b);
  sortedItems =sortedItems.slice(0, n);
  sortedItems.reverse();

  console.log(sortedItems);


  
  // s.slice(start, end)
}
