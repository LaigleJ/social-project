import { UsersRepository } from "../repositories/users-repository.js";
import { registerValidation } from "../validations/users.js";
import express from "express";
import { Hasher } from "../libs/hash.js";

export const UsersControler = express.Router();

UsersControler.post("/", async (req, res) => {
    const { email, password } = req.body;

    const validatedData = registerValidation({email, password});

    if (!validatedData.success) {
        return res.status(400).json({message: "INVALID_DATA"});
    }

    const userFromDB = await UsersRepository.findByEmail(email);

    if (userFromDB) {
        return res.status(400).json({message: "INVALID_CREDANTIALS"});
    }
    const hashedPassword = await Hasher.hash(password);

    const savedUser = await UsersRepository.create({email, password: hashedPassword});
    return res.status(201).json({message: "USER_CREATED"});
})