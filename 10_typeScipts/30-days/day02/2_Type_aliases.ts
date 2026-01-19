type UserTypes = {
    id: number;
    name: string;
    readonly email: string;
};

type AdminTypes = UserTypes & {
    role: "admin" | "user";
};
