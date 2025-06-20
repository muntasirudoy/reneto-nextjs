"use client"

import { createContext, useContext } from "react"
import type {
    CardActionsProps,
    CardContentProps,
    CardContextType,
    CardDescriptionProps,
    CardGridItemProps,
    CardGridProps,
    CardHeaderProps,
    CardProps,
    CardTitleProps,
} from "./types"
import { cn } from "@/utils/utils"

const CardContext = createContext<CardContextType>({
    variant: "light",
    size: "md",
})

const Card = ({ children, variant = "light", size = "md", className }: CardProps) => {
    const baseStyles = "rounded-2xl transition-all duration-700 ease-out transform-gpu group font-sporting "
    const variantStyles = {
        light: "bg-white text-gray-900 shadow-sm border border-gray-100 hover:shadow-lg",
        dark: "bg-gray-800 text-white shadow-xl hover:shadow-2xl hover:shadow-lime-400/10",
    }
    const sizeStyles = {
        sm: "p-6",
        md: "p-8",
        lg: "p-12",
    }

    return (
        <CardContext.Provider value={{ variant, size }}>
            <div className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>{children}</div>
        </CardContext.Provider>
    )
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
    const { size } = useContext(CardContext)
    const sizeStyles = {
        sm: "mb-4",
        md: "mb-6",
        lg: "mb-8",
    }

    return <div className={cn("space-y-2", sizeStyles[size], className)}>{children}</div>
}

const CardTitle = ({ children, className, highlight }: CardTitleProps) => {
    const { variant, size } = useContext(CardContext)

    const sizeStyles = {
        sm: "text-xl",
        md: "text-2xl lg:text-3xl",
        lg: "text-3xl lg:text-4xl",
    }

    if (highlight) {
        const parts = children?.toString().split(highlight) || []
        return (
            <h2 className={cn("font-bold leading-tight", sizeStyles[size], className)}>
                {parts[0]}
                <span
                    className={cn(
                        "px-2 py-1 rounded-lg",
                        variant === "light" ? "bg-gray-900 text-white" : "bg-lime-400 text-gray-900"
                    )}
                >
                    {highlight}
                </span>
                {parts[1]}
            </h2>
        )
    }

    return <h2 className={cn("font-bold leading-tight", sizeStyles[size], className)}>{children}</h2>
}

const CardDescription = ({ children, className }: CardDescriptionProps) => {
    const { variant, size } = useContext(CardContext)

    const sizeStyles = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
    }

    return (
        <p
            className={cn(
                "leading-relaxed",
                variant === "light" ? "text-gray-600" : "text-gray-300",
                sizeStyles[size],
                className
            )}
        >
            {children}
        </p>
    )
}

const CardContent = ({ children, className }: CardContentProps) => {
    const { size } = useContext(CardContext)
    const sizeStyles = {
        sm: "mt-4",
        md: "mt-6",
        lg: "mt-8",
    }

    return <div className={cn(sizeStyles[size], className)}>{children}</div>
}

const CardGrid = ({ children, columns = 3, className }: CardGridProps) => {
    const gridStyles = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    }

    return <div className={cn("grid gap-6", gridStyles[columns], className)}>{children}</div>
}

const CardGridItem = ({ icon: Icon, title, description, className }: CardGridItemProps) => {
    const { variant } = useContext(CardContext)

    return (
        <div className={cn("text-left space-y-4", className)}>
            {Icon && (
                <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-lime-400/50 transition-all duration-500"></div>
                </div>
            )}
            <div>
                <h3 className="font-semibold text-xl mb-3 text-white">{title}</h3>
                {description && (
                    <p className={cn("text-sm leading-relaxed", variant === "light" ? "text-gray-600" : "text-gray-400")}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

const CardActions = ({ children, className }: CardActionsProps) => {
    const { size } = useContext(CardContext)
    const sizeStyles = {
        sm: "mt-4",
        md: "mt-6",
        lg: "mt-8",
    }

    return <div className={cn("flex flex-wrap gap-3", sizeStyles[size], className)}>{children}</div>
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Grid = CardGrid
Card.GridItem = CardGridItem
Card.Actions = CardActions

export { Card }
