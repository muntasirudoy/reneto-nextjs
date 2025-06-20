"use client"

import Button from "@/components/ui/button/button"
import { HighlightedText } from "@/components/ui/highlight"
import { ArrowUpRight, Phone } from "lucide-react"
import Image from "next/image"
import ContactForm from "./contact-form"

export function Contact() {

    return (
        <section className=" py-12 px-8 md:py-20 md:px-12  lg:px-16 relative overflow-hidden">
            <Image src='/contact-shadow.svg' width={2000} height={1000} alt="bg" className=" w-full -right-10  absolute -bottom-16 -z-10" />

            <div className="container">
                <div className="flex justify-start ">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <Button
                            variant="default"
                            size="sm"

                            className="bg-white border-2 border-black hover:bg-black hover:text-white !pt-4"
                        >
                            Contact
                        </Button>
                    </div>
                </div>


                <div className=" flex">
                    <div>
                        <HighlightedText descriptionAlign="mr-auto" className="max-w-[750px] text-left pt-[40px] mr-auto" headings={[
                            { before: "Interested in ", highlighted: "work", after: 'together ?' },

                        ]}
                            description="We start every new client interaction with an in-depth discovery call where
                            we get to know each other and recommend the best course of action."
                        />
                        <Button className="py-8 text-[18px] !bg-transparent mt-[40px]" icon={<Phone />}>Schedule a Call</Button>
                    </div>

                    <ContactForm />
                </div>


            </div>

        </section>
    )
}
