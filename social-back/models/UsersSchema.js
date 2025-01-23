import mongoose from "mongoose";

export const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String    }
});

export default mongoose.model("users", UsersSchema);