import { z } from "zod"

export const SignUpValidation = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    name: z.string().min(2, {
        message: 'Name is too short'
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters'
    })
})