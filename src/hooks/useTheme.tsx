"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute("data-theme", theme)
            document.documentElement.className = theme === "dark" ? "dark" : ""
            localStorage.setItem("theme", theme)
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                className={`${theme === "dark" ? "dark" : ""} ${mounted ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-150`}
                data-theme={theme}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        console.warn("useTheme was called outside of ThemeProvider")
        return { theme: "light", toggleTheme: () => { } }
    }
    return context
}
