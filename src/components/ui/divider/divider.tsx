import { cn } from "@/utils/utils"

interface DividerProps {
    orientation?: "horizontal" | "vertical"
    thickness?: string
    color?: string
    className?: string
    margin?: string
}

export default function Divider({
    orientation = "horizontal",
    thickness,
    color = "bg-gray-300",
    className,
    margin,
}: DividerProps) {
    const isHorizontal = orientation === "horizontal"

    const baseClass = cn(
        isHorizontal ? "w-full" : "h-full",
        thickness ? thickness : isHorizontal ? "h-px" : "w-px",
        color,
        margin || (isHorizontal ? "my-4" : "mx-4"),
        className
    )

    return <div className={baseClass} role="separator" aria-orientation={orientation} />
}
