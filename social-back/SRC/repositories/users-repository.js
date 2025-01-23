import UsersSchema from "../models/UsersSchema.js";

export const UsersRepository = {
    create: async (data) => {
        const newUser = new UsersSchema(data);
        const savedUser = await newUser.save();
        return savedUser;
    },
    findByEmail: async (email) => {
        const saveFromDB = await UsersSchema.findOne({email});
        return saveFromDB;
    },
};