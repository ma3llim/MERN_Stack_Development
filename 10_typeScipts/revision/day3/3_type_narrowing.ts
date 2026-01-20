function print(id: number | string) {
    if (typeof id === "string") {
        id.toUpperCase();
    } else {
        print(id);
    }
}
