const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    const age = prompt("What is your age?");

    if (isNaN(age)) {
        alert("Please enter a valid age.")
        buyTicket();
    }

    const isMatinee = prompt("Are you attending a mainee show? (use 'yes' or 'y')").toLowerCase();

    let cost = getBaseTicketCost(age);

    cost = applyMatineeDiscount(cost, isMatinee);

    alert("Your ticket will cost: $" + cost);
}

function getBaseTicketCost(age) {
    if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
    }
    return GENERAL_ADMISSION_TICKET_COST;
}

function applyMatineeDiscount(cost, isMatinee) {
    if ((isMatinee === "yes") || (isMatinee === "y")) {
        alert("You get a $3 discount!");
        return cost - MATINEE_DISCOUNT;
    }
    return cost
}   