// Partial <T> makes all properties optional
type User = {
    id: number;
    name: string;
    email: string;
};

type UpdateUser = Partial<User>;
type createUser = Partial<User>;
type deleteUser = Partial<User>;

// Required <T> makes all properties Required
type addUser = Required<User>;

// Readonly <T> // prevents from mutation
type readUser = Readonly<User>;

// Pick <T,K> // select only specific keys
type UserPreview = Pick<User, "id" | "name">;

// Omit <T, K> // Remove specific keys.
type UserWithoutEmail = Omit<User, "id">;

// Record <T, K>  create a map-like object
type Roles = Record<string, boolean>;
const permissions: Roles = {
    admin: true,
    user: false,
};
