// Problem 1: The Strict Type Checker
function checkVariable(input) {
    switch (typeof input) {
        case "string": return "string";
        case "number": return "number";
        case "boolean": return "boolean";
        case "bigint": return "bigint";
        case "undefined": return "undefined";
        case "object": return "object";
        default: return "object"; 
    }
}

// Problem 2: Secure ID Generator
function generateIDs(count) {
    let ids = [];
    for (let i = 0; i < count; i++) {
        if (i === 5) continue;
        ids.push(`ID-${i}`);
    }
    return ids;
}

// Problem 3: The Functional Sum
function calculateTotal(...numbers) {
    return numbers.reduce((acc, curr) => {
        if (typeof curr !== "number") {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
        return acc + curr;
    }, 0);
}

// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}

// Problem 5: The Private Inventory
class Item {
    #discount = 0.1; 
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}

// Problem 6: Robust Division
function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    } catch (error) {
        return error.message;
    } finally {
        console.log("Operation attempted");
    }
}
