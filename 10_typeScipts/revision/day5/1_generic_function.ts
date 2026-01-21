function identity<T>(arg: T): T {
    return arg;
}

let obj1 = identity<string>("test");
let obj2 = identity<number>(10);

console.log(obj1);
console.log(obj2);
