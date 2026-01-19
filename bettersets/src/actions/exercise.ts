'use server'

import { getExercises } from "@/services/exercise.service";
import { Exercise } from "@prisma/client";

export async function searchExercises(query: string): Promise<Exercise[]> {
    return await getExercises(query);
}
