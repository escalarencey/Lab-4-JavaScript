class Item {
  #discount = 0.1;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get finalPrice() {
    return this.price * (1 - this.#discount);
  }

  // Define a setter to update the private discount
  set discount(value) {
    if (value < 0 || value > 1) {
      throw new Error("Discount must be between 0 and 1 (e.g., 0.2 for 20%)");
    }
    this.#discount = value;
  }
}

const laptop = new Item("MacBook", 1000);

// Using the setter (looks like a property assignment)
laptop.discount = 0.2; 
console.log(laptop.finalPrice); // 800

// This would trigger our error:
// laptop.discount = 5.0; // Error: Discount must be between 0 and 1
