import express from "express";
import { UsersRepository } from "../repositories/users-repository.js";
import { createUser } from "../controlers/users-controler.js";

const usersRouter = express.Router();

usersRouter.post("/", createUser);

usersRouter.get("/", async (req, res) => {
    const email = req.params.email;
    const user = await UsersRepository.findByEmail(email);
    res.json(user);
});

export default usersRouter;