class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("Ginger", 20);
masalaChai.flavour = "masala"

// Access Modifier
// 1. Private
// 2. Protected
// 3. Readonly
// 4. Static

// Control Gate
// 1. Getter - get the value
// 2. Setter - set the value