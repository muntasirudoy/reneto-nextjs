"use client"


import Button from "@/components/ui/button/button"
import { HighlightedText } from "@/components/ui/highlight"
import { Phone } from "lucide-react"
import Image from "next/image"

export const Hero = () => {
    return (
        <div className=" relative h-[100vh] flex items-center justify-center w-full">
            <div className="container">
                <HighlightedText className="pt-[90px]" headings={[
                    { before: "Trusted", highlighted: "Partners", after: "for" },
                    { before: "Your Website", highlighted: "Develop" }
                ]}
                    description="Building the world’s best marketing websites for over a decade. Your trusted partner for strategy, design, and dev." />
                <div className=" max-w-[700px] mx-auto mt-[40px]">
                    <Button className="py-8 text-[18px]" icon={<Phone />}>Schedule a Call</Button>
                </div>
            </div>
            <Image src='/bg-shadow.svg' width={2000} height={3000} alt="bg" className=" w-full absolute top-0 -z-10" />
        </div>
    )
}
