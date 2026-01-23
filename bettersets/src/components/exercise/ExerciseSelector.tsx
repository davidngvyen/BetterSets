'use client'

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { searchExercises } from "@/actions/exercise"
import { Exercise } from "@prisma/client"

interface ExerciseSelectorProps {
    onSelect: (exercise: Exercise) => void
    initialExercise?: Exercise
    className?: string
}

export function ExerciseSelector({ onSelect, initialExercise, className }: ExerciseSelectorProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState<string>(initialExercise?.name || "")
    const [exercises, setExercises] = React.useState<Exercise[]>([])
    const [loading, setLoading] = React.useState(false)

    // Initial load
    React.useEffect(() => {
        if (initialExercise) {
            setExercises([initialExercise])
        } else {
            // Load some default exercises
            searchExercises("").then(setExercises)
        }
    }, [initialExercise])

    const handleSearch = React.useCallback(async (query: string) => {
        setLoading(true)
        try {
            const results = await searchExercises(query)
            setExercises(results)
        } catch (error) {
            console.error("Failed to search exercises", error)
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("w-full justify-between", className)}
                >
                    {value || "Select exercise..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0" align="start">
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder="Search exercises..."
                        onValueChange={(val) => {
                            handleSearch(val)
                        }}
                    />
                    <CommandList>
                        {loading && <div className="py-6 text-center text-sm">Loading...</div>}
                        {!loading && exercises.length === 0 && (
                            <CommandEmpty>No exercise found.</CommandEmpty>
                        )}
                        <CommandGroup>
                            {exercises.map((exercise) => (
                                <CommandItem
                                    key={exercise.id}
                                    value={exercise.name}
                                    onSelect={() => {
                                        setValue(exercise.name)
                                        onSelect(exercise)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === exercise.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {exercise.name}
                                    <span className="ml-2 text-xs text-muted-foreground capitalize">
                                        {exercise.muscleGroup}
                                    </span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
