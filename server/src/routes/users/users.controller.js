import {
    addNewUser
} from "../../models/users/users.model.js";

const httpAddNewUser = async (req, res) => {
    try {
        const result = await addNewUser(req.body);

        return res.status(result.code).send(result.message)
    } catch (error) {
        return res.status(500).send(error);
    }
}

export {
    httpAddNewUser
}