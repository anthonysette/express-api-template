const users = [
    {
        id: 1,
        name: "Anthony Sette",
        email: ""
    },
    {
        id: 2,
        name: "John Doe",
        email: ""
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
    users.push(user);
    return user;
}

module.exports = {
    getUsers,
    getUser,
    createUser
};