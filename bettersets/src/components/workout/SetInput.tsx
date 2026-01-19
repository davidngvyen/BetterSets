'use client'

import * as React from "react"
import { Trash2, Plus } from "lucide-react"
import { UseFormReturn, useFieldArray, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface SetInputProps {
    form: UseFormReturn<any> // Using any to avoid circular dependency with schema
    exerciseIndex: number
    className?: string
}

export default function SetInput({ form, exerciseIndex, className }: SetInputProps) {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: `exercises.${exerciseIndex}.sets`
    })

    const { register, control } = form

    return (
        <div className={cn("space-y-2 mt-4", className)}>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2 px-1">
                <div className="w-8 text-center">Set</div>
                <div className="flex-1 pl-3">Weight</div>
                <div className="flex-1 pl-3">Reps</div>
                <div className="w-[100px] pl-4">RPE</div>
                <div className="w-[80px] text-center">Warmup</div>
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-5">
                    {/* Set Number */}
                    <div className="flex h-10 w-8 items-center justify-center text-sm text-muted-foreground">
                        {index + 1}
                    </div>

                    {/* Weight */}
                    <div className="flex-1">
                        <Input
                            type="number"
                            placeholder="Weight"
                            {...register(`exercises.${exerciseIndex}.sets.${index}.weight`, {
                                valueAsNumber: true
                            })}
                            className="w-full"
                        />
                    </div>

                    {/* Reps */}
                    <div className="flex-1">
                        <Input
                            type="number"
                            placeholder="Reps"
                            {...register(`exercises.${exerciseIndex}.sets.${index}.reps`, {
                                valueAsNumber: true
                            })}
                            className="w-full"
                        />
                    </div>

                    {/* RPE */}
                    <div className="w-[100px]">
                        <Controller
                            control={control}
                            name={`exercises.${exerciseIndex}.sets.${index}.rpe`}
                            render={({ field }) => (
                                <Select
                                    value={field.value?.toString()}
                                    onValueChange={(val) => field.onChange(val ? parseInt(val) : undefined)}
                                >
                                    <SelectTrigger tabIndex={-1}>
                                        <SelectValue placeholder="RPE" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">RPE -</SelectItem>
                                        {[10, 9.5, 9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5].map((val) => (
                                            <SelectItem key={val} value={val.toString()}>
                                                {val}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>

                    {/* Warmup Checkbox */}
                    <div className="flex items-center gap-2">
                        <Controller
                            control={control}
                            name={`exercises.${exerciseIndex}.sets.${index}.isWarmup`}
                            render={({ field }) => (
                                <Checkbox
                                    id={`warmup-${index}`}
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => remove(index)}
                            className="text-muted-foreground hover:text-destructive"
                            tabIndex={-1}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}

            <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full mt-2"
                onClick={() => append({
                    setNumber: fields.length + 1,
                    reps: 0,
                    weight: 0,
                    rpe: 8,
                    isWarmup: false
                })}
            >
                <Plus className="mr-2 h-4 w-4" />
                Add Set
            </Button>
        </div>
    )
}
