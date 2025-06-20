"use client"


import { ArrowDown, ArrowRight } from "@/components/icons/arrow"
import Button from "@/components/ui/button/button"
import { Card } from "@/components/ui/card/card"
import Divider from "@/components/ui/divider/divider"
import Text from "@/components/ui/text/text"
import { workProcess } from "@/constant"
import { cn } from "@/utils/utils"

export const Process = () => {
    return (
        <section className="py-20 px-10 bg-[#141414] text-white rounded-[2rem] mx-3">
            <div className=" space-y-3 ">
                <div className=" flex gap-20 w-full">
                    <div className=" flex mb-4">
                        <Button className=" rounded-full text-white !bg-black border-[2px] border-white" iconOnly icon={<ArrowDown />}></Button>
                        <Button className=" rounded-full" variant="outline">Work Process</Button>
                    </div>

                    <Text as="h2" size="5xl" weight="bold" color="white" >
                        My Work Process
                    </Text>
                </div>
                <Card.Grid columns={2} className="gap-6">
                    {workProcess.map((card, idx) => (
                        <Card
                            key={idx}
                            variant={card.variant as "dark" | "light"}
                            size="md"
                            className={`${card.className} hover:bg-primary `}
                        >
                            <Card.Header className="flex items-start justify-between mb-6">
                                <div className={cn(card.tag.textColor, "rounded-full px-6 py-2 font-sporting inline-block bg-primary-light m-0 group-hover:bg-secondary group-hover:text-white")}>
                                    <span className="font-medium font-sporting ">{card.tag.text}</span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    icon={<ArrowRight />}
                                    className={cn("border-none bg-transparent px-0 gap-2", card.button.textColor)}
                                >
                                    <span className="text-sm underline">Read More</span>
                                </Button>
                            </Card.Header>
                            <Card.Description className={card.variant === "light" ? "text-secondary" : "text-white/80 group-hover:text-secondary"}>
                                {card.description}
                            </Card.Description>
                        </Card>
                    ))}
                </Card.Grid>
            </div>

        </section>
    )
}
