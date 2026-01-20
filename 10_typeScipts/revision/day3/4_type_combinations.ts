// typeof
function log(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    return value;
}

// instance of
class User {
    name = "Sameer";
}

function handle(input: User | Date) {
    if (input instanceof User) {
        console.log(input.name);
    } else {
        console.log(input.getFullYear());
    }
}

// in
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat) {
    if ("bark" in animal) {
        animal.bark;
    } else {
        animal.meow;
    }
}
