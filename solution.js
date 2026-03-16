// Problem 6: Robust Division
function safeDivide(a, b) {
  try {
    // 1. Check if the divisor is zero and throw an error if so
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    // 2. Return the result if successful
    return a / b;
  } catch (error) {
    // 3. The catch block returns the error message as a string
    return error.message;
  } finally {
    // 4. The finally block executes regardless of success or failure
    console.log("Operation attempted");
  }
}

// Testing the function
console.log(safeDivide(10, 2)); // Output: 5, then logs "Operation attempted"
console.log(safeDivide(10, 0)); // Output: "Cannot divide by zero", then logs "Operation attempted"
