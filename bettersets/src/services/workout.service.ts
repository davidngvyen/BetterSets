'use server'

import { prisma } from '@/lib/db'
import { CreateWorkoutInput, workoutWithExercises } from '@/types/workout'
import { revalidatePath } from 'next/cache'

export async function getWorkouts(userId: string) {
    try {
        const workouts = await prisma.workout.findMany({
            where: {
                userId,
            },
            include: {
                exercises: {
                    include: {
                        exercise: true,
                        sets: true
                    },
                    orderBy: {
                        order: 'asc'
                    }
                }
            },
            orderBy: {
                date: 'desc',
            },
        })
        return workouts
    } catch (error) {
        console.error('Error fetching workouts:', error)
        return []
    }
}

export async function getWorkoutById(id: string) {
    try {
        const workout = await prisma.workout.findUnique({
            where: { id },
            include: {
                exercises: {
                    include: {
                        exercise: true,
                        sets: {
                            orderBy: {
                                setNumber: 'asc',
                            },
                        },
                    },
                    orderBy: {
                        order: 'asc',
                    },
                },
            },
        })
        return workout
    } catch (error) {
        console.error('Error fetching workout:', error)
        return null
    }
}

export async function createWorkout(userId: string, data: CreateWorkoutInput) {
    try {
        const workout = await prisma.workout.create({
            data: {
                userId,
                name: data.name,
                date: data.date || new Date(),
                notes: data.notes,
                startTime: data.startTime,
                endTime: data.endTime,
                exercises: {
                    create: data.exercises.map((exercise) => ({
                        exerciseId: exercise.exerciseId,
                        order: exercise.order,
                        sets: {
                            create: exercise.sets.map((set) => ({
                                setNumber: set.setNumber,
                                reps: set.reps,
                                weight: set.weight,
                                isWarmup: set.isWarmup,
                                rpe: set.rpe,
                            })),
                        },
                    })),
                },
            },
            include: {
                exercises: {
                    include: {
                        exercise: true,
                        sets: true
                    }
                }
            }
        })

        revalidatePath('/workouts')
        return workout
    } catch (error) {
        console.error('Error creating workout:', error)
        throw error // Re-throw to handle in UI
    }
}
