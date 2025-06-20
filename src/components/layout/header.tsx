"use client"

import { useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import Button from "../ui/button/button"
import { Phone } from "lucide-react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    console.log(theme);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#process", label: "Process" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 py-4 z-50 bg-white/20 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
            <nav className="container">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold  uppercase font-sporting">devlop.me</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 font-sporting dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button className="hidden lg:inline-flex text-[16px] py-6 px-2" size="sm" icon={<Phone size={16} />}>Start Project</Button>

                        {/* <Button size="sm" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === "light" ? "🌙" : "☀️"}
                        </Button> */}

                        <div className="md:hidden">
                            <Button size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? "✕" : "☰"}
                            </Button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
