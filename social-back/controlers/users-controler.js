import UsersSchema from "../models/UsersSchema.js";
import bcrypt from "bcrypt";
import { UsersRepository } from "../repositories/users-repository.js";

export const createUser = async (req, res) => {
    try {
        const { email, password, avatarUrl } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userExists = await UsersRepository.findByEmail({ email });
    if (userExists) {
        return res.status(400).json({ message: "Veuillez vérifier vos informations" });
    }

    const user = new UsersSchema({ email, password: hashedPassword, avatarUrl });
    const savedUser = await UsersRepository.create(user);
    res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}