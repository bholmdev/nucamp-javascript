let i = 0;

while (i < 5) {
    i += 1;
    console.log("This is iteration #" + i);
}

let j = 5;

do {
    j += 1;
    console.log("This is iteration #" + j);
} while (j < 5);

let answer = "";

do {
    answer = prompt("Do you like chocolate?");
} while (answer !== "yes");