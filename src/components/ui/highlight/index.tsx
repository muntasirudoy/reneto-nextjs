"use client"

import React from "react"

interface HighlightedText {
    before: string
    highlighted: string
    after?: string
}

interface HeroProps {
    headings: HighlightedText[]
    description?: string
    className?: string
    descriptionAlign?: "mx-auto" | "ml-auto" | "mr-auto"
    descriptionWidth?: 'max-w-[500px]| max-w-[600px] | max-w-[700px]' | 'max-w-[800px]' | 'max-w-[900px]' | 'max-w-[1000px]'
}

export const HighlightedText: React.FC<HeroProps> = ({
    headings,
    description,
    className = "",
    descriptionAlign = "mx-auto",
    descriptionWidth = "max-w-[700px]",
}) => {
    return (
        <div className={`space-y-4  z-50 ${className}`}>
            {headings.map((heading, index) => (
                <h1
                    key={index}
                    className=" text-4xl xl:text-[68px] 2xl:text-[70px] mb-0 font-semibold font-sporting text-gray-900 leading-tight"
                >
                    {heading.before}{" "}
                    <span className="highlight">{heading.highlighted}</span>{" "}
                    {heading.after && heading.after}
                </h1>
            ))}

            {description && (
                <p className={`${descriptionAlign} ${descriptionWidth} pt-[40px] leading-8 font-sporting text-[18px] `}>
                    {description}
                </p>
            )}
        </div>
    )
}
