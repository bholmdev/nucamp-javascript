const myStr = "abcdefg";

for (const x of myStr) {
    console.log(x);
}

console.log(myStr.indexOf("b"));
console.log(myStr.includes("c"));

const mySentence = "little red balloon";
const mySplit = mySentence.split(" ");
console.log(mySplit);