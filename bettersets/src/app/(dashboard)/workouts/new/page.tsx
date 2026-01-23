import WorkoutForm from "@/components/workout/WorkoutForm"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { getExercises } from "@/services/exercise.service"

export const metadata = {
  title: "New Workout | BetterSets",
  description: "Create a new workout plan.",
}

export default async function NewWorkoutPage() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect("/auth/signin")
  }

  const exercises = await getExercises()

  return (
    <div className="container mx-auto py-6 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create Workout</h1>
        <p className="text-muted-foreground mt-1">
          Plan your session or log a workout you just finished.
        </p>
      </div>

      <WorkoutForm userId={session.user.id} exercises={exercises} />
    </div>
  )
}
