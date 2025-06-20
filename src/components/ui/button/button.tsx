"use client"

import type React from "react"

interface ButtonProps {
    children?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    className?: string
    icon?: React.ReactNode
    iconOnly?: boolean
    variant?: "default" | "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
}

export default function Button({
    children,
    onClick,
    disabled = false,
    className = "",
    icon,
    iconOnly = false,
    variant = "default",
    size = "md",
}: ButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center font-se font-normal font-sporting transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"

    const variantStyles = {
        default: "bg-white text-black border border-black border-[2px] group-hover:border-white",
        primary: "bg-black text-white border border-black group-hover:border-white",
        secondary: "bg-blue-500 text-white border border-blue-500 group-hover:border-white",
        outline: "bg-transparent text-white border border-black border-[2px] border-white ",
    }

    const sizeStyles = {
        iconOnly: {
            sm: "w-10 h-10 rounded-full",
            md: "w-11 h-11 rounded-full",
            lg: "w-13 h-13 rounded-full",
        },
        textOnly: {
            sm: "px-6 py-2.5 text-sm rounded-full h-10",
            md: "px-8 py-3 text-base rounded-full h-12",
            lg: "px-10 py-4 text-lg rounded-full h-14",
        },
        combined: {
            sm: "pl-2 pr-4 py-2.5 text-sm gap-3 rounded-full h-10",
            md: "pl-2.5 pr-6 py-3 text-base gap-4 rounded-full h-12",
            lg: "pl-3 pr-8 py-4 text-lg gap-5 rounded-full h-14",
        },
    }

    const iconSizes = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    }

    const iconContainerSizes = {
        sm: "w-9 h-9",
        md: "w-11 h-11",
        lg: "w-14 h-14",
    }

    const getButtonType = () => {
        if (iconOnly || (!children && icon)) return "iconOnly"
        if (!icon && children) return "textOnly"
        return "combined"
    }

    const buttonType = getButtonType()
    const currentSizeStyles = sizeStyles[buttonType][size]

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${currentSizeStyles} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

            {icon && (
                <>
                    {buttonType === "iconOnly" ? (
                        <span className={`${iconSizes[size]} z-10 group-hover:text-white transition-colors duration-300`}>
                            {icon}
                        </span>
                    ) : (
                        <div
                            className={`${iconContainerSizes[size]} ${size == 'sm' ? '-ml-2' : '-ml-2.5'} rounded-full border-[2px] border-black group-hover:border-white flex items-center justify-center flex-shrink-0 z-10 transition-colors duration-300`}
                        >
                            <span
                                className={`${iconSizes[size]} -ml-1 group-hover:text-white transition-colors duration-300`}
                            >
                                {icon}
                            </span>
                        </div>
                    )}
                </>
            )}

            {!iconOnly && children && (
                <span className="whitespace-nowrap leading-none z-10 group-hover:text-white transition-colors duration-300">
                    {children}
                </span>
            )}
        </button>
    )
}
