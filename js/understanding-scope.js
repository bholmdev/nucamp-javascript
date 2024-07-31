if (true) {
    let testVar = 1;
}
console.log(testVar);
// variable not defined.  It is only in the scope of the if statement.

if (true) {
    let testVar = 1;
    if (true) {
        console.log(testVar);
    }
}
// this will work.

if (true) {
    if (true) {
        let testVar = 1;
    }
    console.log(testVAr);
}
// this is outside scope

if (true) {
    let testVar = 1;
    if (true) {
        let testVar = 2;
        console.log("In the child block, testVar is ", testVar);
    }
    console.log("In the parent block, testVar is ", testVar);
}
//  In the child block, testVar is  2
//  In the parent block, testVar is  1