import express from "express";
import { connectToMongo } from "./SRC/utils/db.js";
import {UsersControler} from "./SRC/controlers/users-controler.js";

const PORT = 5000;
const HOST = "localhost";


const app = express();

app.use(express.json());

app.use("/api/users", UsersControler);


app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
    connectToMongo();
});