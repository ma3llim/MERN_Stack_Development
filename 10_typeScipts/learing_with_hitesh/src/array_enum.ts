const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

type Chai = {
    name: string;
    price: number;
};

const menu: Chai[] = [
    { name: "Masala Tea", price: 40 },
    { name: "Adrak Tea", price: 50 },
];

const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Pune")

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];

// Name Tuple
const chaiItems: [name: string, price: number] = ["Masala", 25];
