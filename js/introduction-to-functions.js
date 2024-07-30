// Used to write re-usable code.
// Functions can exist within functions.
// Some are built in ex:  alert();.

function sayHello() { //parenthesis contains parameter list
    //...somecode...;
}

sayHello2() //parenthesis contain argument list

function sayWord(word) {
    alert(word);
}

sayWord("rutabaga");
// Output is rutabaga.

function getArea(width, length) {
    alert(width * length);
}

getArea(3, 4);
// Output would be 12.

// or

function getArea2(width, length) {
    return width * length;
}

getArea2(3, 4);

// or

function getArea3() {
    return width * length;
}

let area = getArea(3, 4);
alert(area);