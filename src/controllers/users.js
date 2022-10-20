import databaseService from '../services/databaseService';

const getUsers = async (req, res, next) => {
    try {
        const users = await databaseService.getUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await databaseService.getUser(req.params.uid);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

const createUser = async (req, res, next) => {
    const { firstName, lastName, email } = req.body;
    try {
        const user = await databaseService.createUser({ firstName, lastName, email });
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

export default {
    getUsers,
    getUser,
    createUser
}