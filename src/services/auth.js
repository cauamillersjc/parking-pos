import database from "./database";

const login = async (email, password) => {
    return await database.selectUser(email, password);
}

export default {
    login
}