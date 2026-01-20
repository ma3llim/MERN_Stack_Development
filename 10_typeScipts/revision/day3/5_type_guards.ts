function isString(value: unknown): value is string {
    return typeof value === "string";
}

// real-world example
type Success = { data: string };
type Error = { error: string };

function isSuccess(res: Success | Error): res is Success {
    return "data" in res;
}

function handle(res: Success | Error) {
    if (isSuccess(res)) {
        console.log(res.data);
    } else {
        console.log(res.error);
    }
}
