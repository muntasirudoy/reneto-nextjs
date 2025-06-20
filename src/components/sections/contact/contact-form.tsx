"use client"

import type React from "react"


import { Send, MessageCircle, Facebook, Instagram, Twitter, SendIcon } from "lucide-react"
import { useState } from "react"
import { Card } from "@/components/ui/card/card"
import Button from "@/components/ui/button/button"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSend = () => {
        console.log("Send clicked:", formData)
        alert("Form submitted! (Demo)")
    }

    const handleContact = () => {
        console.log("Contact me clicked")
        alert("Opening contact options... (Demo)")
    }

    const handleSocialClick = (platform: string) => {
        console.log(`${platform} clicked`)
        alert(`Opening ${platform}... (Demo)`)
    }

    return (

        <div className="w-full max-w-md">
            <Card variant="dark" size="lg" className="bg-black  shadow-2xl">
                <form className="space-y-8">
                    <div className="space-y-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-transparent text-white placeholder-gray-400 text-md font-sporting  outline-none pb-3 border-b-2 border-gray-700 focus:border-b-primary   transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent text-white placeholder-gray-400 text-md font-sporting  outline-none pb-3 border-b-2 border-gray-700 focus:border-lime-400 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <textarea
                            name="project"
                            placeholder="Describe your project"
                            value={formData.project}
                            onChange={handleInputChange}
                            rows={1}
                            className="w-full bg-transparent text-white placeholder-gray-400 text-md font-sporting  outline-none pb-3 border-b-2 border-gray-700 focus:border-lime-400 transition-colors resize-none"
                        />
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <Button className="hidden lg:inline-flex text-[16px] py-6 px-2" size="sm"
                            icon={<SendIcon size={16} />}>Send</Button>


                        <span className="text-gray-400 text-sm">or</span>

                        <Button className="hidden lg:inline-flex text-[16px] py-6 px-2" size="sm"
                            icon={<SendIcon size={16} />}>Contact me</Button>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                        <span className="text-gray-400 text-base font-sporting">@williamney</span>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => handleSocialClick("Facebook")}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <Facebook className="w-4 h-4 text-white" />
                            </button>
                            <button
                                onClick={() => handleSocialClick("Instagram")}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-white" />
                            </button>
                            <button
                                onClick={() => handleSocialClick("Twitter")}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <Twitter className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>

    )
}
