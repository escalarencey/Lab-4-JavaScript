// Problem 3: The Functional Sum
function calculateTotal(...numbers) {
  return numbers.reduce((accumulator, current) => {
    // 1. Check if the current element is a number
    if (typeof current !== "number") {
      throw new TypeError("Invalid input: All arguments must be numbers");
    }

    // 2. Add current value to the running total
    return accumulator + current;
  }, 0); // Start the accumulator at 0
}

// Successful Example
console.log(calculateTotal(10, 20, 30)); // 60

// Error Example
try {
  console.log(calculateTotal(10, "20", 30));
} catch (error) {
  console.error(error.message); // "Invalid input: All arguments must be numbers"
}
