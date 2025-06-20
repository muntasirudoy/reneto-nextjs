"use client"

import Button from "@/components/ui/button/button"
import { HighlightedText } from "@/components/ui/highlight"
import { ArrowUpRight } from "lucide-react"
import { ZigzagButtons } from "./zigzag-buttons"
import Image from "next/image"

export function About() {

    return (
        <section className=" pt-12 px-8 md:pt-20 md:px-12  lg:px-16 relative overflow-x-hidden">
            <Image src='/about-shadow.svg' width={2000} height={1000} alt="bg" className=" w-full -left-10  absolute -top-16 -z-10" />

            <div className="container">
                <div className="flex justify-end ">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <Button
                            variant="default"
                            size="sm"
                            className=" !bg-transparent border-2 border-black hover:bg-black hover:text-white !pt-4"
                        >
                            About
                        </Button>
                    </div>
                </div>


                <HighlightedText descriptionAlign="ml-auto" descriptionWidth="max-w-[900px]" className=" w-fit pt-[40px] text-right ml-auto" headings={[
                    { before: "I’ve been ", highlighted: "Developing" },
                    { before: "Websites since", highlighted: "2013" }
                ]}
                    description="We start every new client interaction with an in-depth discovery call where
                            we get to know each other and recommend the best course of action."
                />
            </div>
            <ZigzagButtons />
        </section>
    )
}
