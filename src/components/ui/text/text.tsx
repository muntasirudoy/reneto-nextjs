"use client"

import React from "react"
import { cn } from "@/utils/utils"

interface TextProps {
    as?: "h1" | "h2" | "h3" | "p" | "span" | "div"
    children: React.ReactNode
    size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
    weight?: "normal" | "medium" | "semibold" | "bold"
    color?: "white" | "gray" | "black" | "muted"
    align?: "left" | "center" | "right"
    className?: string
}

const baseColor = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-300",
    muted: "text-gray-500",
}

const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
}

const weightMap = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
}

const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
}

const Text: React.FC<TextProps> = ({
    as: Tag = "p",
    children,
    size = "base",
    weight = "normal",
    color = "white",
    align = "left",
    className = "",
}) => {
    return (
        <Tag
            className={cn(
                sizeMap[size],
                weightMap[weight],
                baseColor[color],
                alignMap[align],
                "font-sporting leading-relaxed",
                className
            )}
        >
            {children}
        </Tag>
    )
}

export default Text
