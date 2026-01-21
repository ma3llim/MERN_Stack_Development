class Storage<T> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

type User = {
    id: number;
    name: string;
};

type UserKeys = keyof User;
