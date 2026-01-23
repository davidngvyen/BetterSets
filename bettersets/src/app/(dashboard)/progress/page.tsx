"use client";
import React from "react";
import { TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressChart } from "@/components/charts/ProgressChart";

const mockRecords = [
  { exerciseId: "1", exerciseName: "Bench Press", weight: 225, date: new Date().toISOString() },
  { exerciseId: "2", exerciseName: "Squat", weight: 315, date: new Date().toISOString() },
  { exerciseId: "3", exerciseName: "Deadlift", weight: 405, date: new Date().toISOString() }
];

const mockHistory = [
  { date: "Jan 1", weight: 185, reps: 10, volume: 1850, isPr: false },
  { date: "Jan 8", weight: 195, reps: 8, volume: 1560, isPr: true },
  { date: "Jan 15", weight: 205, reps: 5, volume: 1025, isPr: true },
  { date: "Jan 22", weight: 215, reps: 3, volume: 645, isPr: true },
  { date: "Jan 29", weight: 225, reps: 1, volume: 225, isPr: true },
];

export default function ProgressPage() {
  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      <div>
        <h1 className="text-3xl font-bold uppercase">Progress Tracking</h1>
        <p className="text-muted-foreground uppercase text-xs">Monitor your improvements over time</p>
      </div>

      {/* Personal Records */}
      <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 uppercase">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Personal Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mockRecords.map((record) => (
              <button
                key={record.exerciseId}
                className="rounded-xl border-2 border-black p-4 text-left transition-all hover:bg-primary/5 hover:translate-x-1"
              >
                <h4 className="font-bold uppercase text-sm">{record.exerciseName}</h4>
                <p className="mt-2 text-2xl font-bold text-primary font-mono">{record.weight} lbs</p>
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  {new Date(record.date).toLocaleDateString()}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exercise Progress Chart */}
      <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 uppercase">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Bench Press Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase">Weight Progression</h4>
              <div className="w-full border-2 border-black bg-white p-2">
                <ProgressChart data={mockHistory} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
