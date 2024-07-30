function getName() {
    const USER_NAME = prompt("What is your name?");
    sayHello(USER_NAME);
}

function sayHello(name) {
    alert("Hello " + name + "!");
    console.log("Alert sent!");
}