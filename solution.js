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
