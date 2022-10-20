const users = [
    {
        id: 0,
        firstName: "Anthony",
        lastName: "Sette",
        email: "anthony@sparc.agency"
    },
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        email: "john.doe@sparc.agency"
    },
];

const getUsers = () => {
    // You will call a database here
    return users;
};

const getUser = (uid) => {
    // You will call a database here
    const user = users.find((user) => user.id === uid) || null;
    return user;
};

const createUser = (user) => {
    // You will call a database here
    const id = users.length;
    const newUser = { id, ...user }
    users.push(newUser);
    return newUser;
}

module.exports = {
    getUsers,
    getUser,
    createUser
};