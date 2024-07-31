const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    const age = prompt("What is your age?");

    if (isNaN(age)) {
        alert("Please enter a valid age.")
        return
    }

    const isMatinee = prompt("Are you attending a mainee show? (Movie starts before 5pm) Use 'yes'/'y' or 'no'/'n'").toLowerCase();

    if (isMatinee === "yes" || isMatinee === "y") {
        alert("You get a $3 discount!");
    }
    else if (isMatinee === "no" || isMatinee === "n") {
        alert("If you purchase a ticket for a show that starts before 5pm you can get a discount :).");
    }
    else {
        alert("Please enter 'yes'/'y' or 'no'/'n'.");
        return
    }

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
        return cost - MATINEE_DISCOUNT;
    }
    return cost
}   