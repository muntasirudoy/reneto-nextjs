import { cn } from "@/utils/utils"


interface ArrowDownProps {
    className?: string
}

export const ArrowDown = ({ className }: ArrowDownProps) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("inline-block", className)}>
            <path d="M0.790039 6.39205L1.80141 5.36932L5.35254 8.92045V0L6.82982 6.4574e-08V8.92045L10.3753 5.36932L11.3923 6.39205L6.09118 11.6932L0.790039 6.39205Z" fill="white" />
        </svg>

    )
}

export const ArrowRight = ({ className }: ArrowDownProps) => {
    return (
        <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("inline-block", className)}>
            <path d="M0 7.5H22M22 7.5C19.5905 7.04545 14.7714 4.90909 14.7714 0M22 7.5C19.5905 7.95455 14.7714 10.0909 14.7714 15" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
    )
}

export const ArrowLeft = ({ className }: ArrowDownProps) => {
    return (
        <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("inline-block", className)}>
            <path d="M22 7.5H0M0 7.5C2.40955 7.04545 7.22857 4.90909 7.22857 0M0 7.5C2.40955 7.95455 7.22857 10.0909 7.22857 15" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
    )
}