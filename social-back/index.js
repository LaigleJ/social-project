import express from "express";
import usersRouter  from "./routes/users-routes.js";
import { connectToMongo } from "./utils/db.js";

const PORT = 5000;
const HOST = "localhost";

connectToMongo();

const app = express();

app.use(express.json());

app.use("/api/users", usersRouter);

//app.get("/api/users/:email", usersRouter);
//app.post("/api/users", usersRouter);

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});