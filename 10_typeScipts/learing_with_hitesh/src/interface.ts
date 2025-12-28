type ChaiOrder = { type: string; sugar: number; strong: boolean };

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: number;
};

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}
