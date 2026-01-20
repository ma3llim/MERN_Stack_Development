type user = {
    id: number;
    name: string;
};

type admin = {
    role: "admin" | "member";
};

type UserAdmin = user & admin;

const admin: UserAdmin = {
    id: 1,
    name: "Sameer",
    role: "admin",
};
