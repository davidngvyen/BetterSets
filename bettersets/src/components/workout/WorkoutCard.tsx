'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { WorkoutWithExercises } from '@/types/workout'
import { CalendarDays, Clock, Dumbbell, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'

interface WorkoutCardProps {
  workout: WorkoutWithExercises
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const exerciseCount = workout.exercises.length
  const totalSets = workout.exercises.reduce((acc, ex) => acc + ex.sets.length, 0)

  return (
    <Link href={`/workouts/${workout.id}`} className="block transition-transform hover:-translate-y-1">
      <Card className="h-full hover:border-primary/50 transition-colors">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-xl line-clamp-1">{workout.name}</CardTitle>
            <Badge variant={workout.isCompleted ? 'default' : 'secondary'}>
              {workout.isCompleted ? 'Completed' : 'Planned'}
            </Badge>
          </div>
          <CardDescription className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {format(new Date(workout.date), 'MMM d, yyyy')}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          {workout.notes && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {workout.notes}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Dumbbell className="h-4 w-4 text-primary" />
              <span>{exerciseCount} Exercises</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium text-foreground">{totalSets}</span> Sets
            </div>
            {workout.durationMins && (
              <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{workout.durationMins} minutes</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between items-center">
          <span>View Details</span>
          <ChevronRight className="h-4 w-4" />
        </CardFooter>
      </Card>
    </Link>
  )
}
