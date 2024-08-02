const PRIMARY_COLORS_ARR = ["red", "blue", "yellow"];
const SECONDARY_COLORS_ARR = ["purple", "green", "orange"];
const COLORS_ARR = PRIMARY_COLORS_ARR.concat(SECONDARY_COLORS_ARR);
// COLORS_ARR.sort();
// COLORS_ARR.reverse();
console.log(COLORS_ARR);

const TEST_ARR = ["a", "b", "c", "d", "e", "f", "g"];
// let slicedARR = TEST_ARR.slice(2, 5);
// console.log(slicedARR);

//TEST_ARR.splice(2, 0, "x", "y", "z");
// TEST_ARR.splice(1, 3); // removes items
// const removed = TEST_ARR.splice(1,3);
TEST_ARR.splice(1, 3, "uno");
console.log(TEST_ARR);
// console.log(removed);