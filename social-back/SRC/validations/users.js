import { z } from "zod";

const registerSchema = z.object({
    email: z.string({required_error: "Email is required"})
        .email({message: "INVALID_EMAIL"}),
    password: z.string({required_error: "Password is required"})
        .min(6, {message: "PASSWORD_TOO_SHORT"})
        .max(32, {message: "PASSWORD_TOO_LONG"})
})

export const registerValidation = (data) => {
    const validatedData = registerSchema.safeParse(data);
    return validatedData;
} 