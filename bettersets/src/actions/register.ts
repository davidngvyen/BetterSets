'use server'

import { z } from 'zod'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

export type RegisterInput = z.infer<typeof registerSchema>

export async function registerUser(data: RegisterInput) {
    const result = registerSchema.safeParse(data)

    if (!result.success) {
        return { success: false, error: result.error.errors[0].message }
    }

    const { name, email, password } = result.data

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return { success: false, error: 'Email already exists' }
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create user
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })

        return { success: true }
    } catch (error) {
        console.error('Registration error:', error)
        return { success: false, error: 'Something went wrong. Please try again.' }
    }
}
