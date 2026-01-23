"use client"

import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    TooltipProps,
    DotProps,
} from "recharts"
import { Star } from "lucide-react"

interface ProgressDataPoint {
    date: string
    weight: number
    reps: number
    volume: number
    isPr: boolean
}

interface ProgressChartProps {
    data: ProgressDataPoint[]
}

const CustomDot = (props: DotProps & { payload?: ProgressDataPoint }) => {
    const { cx, cy, payload } = props

    if (payload?.isPr) {
        return (
            <svg
                x={(cx || 0) - 10}
                y={(cy || 0) - 10}
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="#fbbf24" // warning color (yellow/amber)
                stroke="#fbbf24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        )
    }

    return (
        <circle
            cx={cx}
            cy={cy}
            r={4}
            stroke="var(--color-primary)"
            strokeWidth={2}
            fill="var(--color-background)"
        />
    )
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload as ProgressDataPoint
        return (
            <div className="rounded-lg border bg-card p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Date
                        </span>
                        <span className="font-bold text-muted-foreground">
                            {label}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Weight
                        </span>
                        <span className="font-bold text-foreground">
                            {data.weight} lbs
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Reps
                        </span>
                        <span className="font-bold text-muted-foreground">
                            {data.reps}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Volume
                        </span>
                        <span className="font-bold text-muted-foreground">
                            {data.volume} lbs
                        </span>
                    </div>
                </div>
                {data.isPr && (
                    <div className="mt-2 flex items-center gap-1 text-xs font-medium text-warning">
                        <Star className="h-3 w-3 fill-current" />
                        Personal Record
                    </div>
                )}
            </div>
        )
    }

    return null
}

export function ProgressChart({ data }: ProgressChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                    dataKey="date"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={<CustomDot />}
                    activeDot={{ r: 6, fill: "var(--color-primary)" }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
