let i = 0;

while (i < 5) {
    console.log("Loop iteration #", i);
    i++;
}

for (let i = 0; i < 5; i++) {
    console.log("Loop iteration #", i);
}

const GUESTS_ARRAY = ["Jack", "Aravind", "Samira", "Haley", "Lydia", "Adrian"];

for (let i = 0; i < GUESTS_ARRAY.length; i++) {
    console.log("Welcome to the party " + GUESTS_ARRAY[i] + "!");
}

// or

for (const guest of GUESTS_ARRAY) {
    console.log("Welcome to the party " + guest + "!");
}