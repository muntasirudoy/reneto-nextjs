"use client"


import { ArrowDown } from "@/components/icons/arrow"
import Button from "@/components/ui/button/button"
import { Card } from "@/components/ui/card/card"
import Divider from "@/components/ui/divider/divider"
import Text from "@/components/ui/text/text"
import { skills } from "@/constant"
import { SkillsSlider } from "./skills-slider"

export const Skills = () => {
    return (
        <section className="py-20 px-10 bg-black text-white rounded-[2rem] mx-3">
            <div className=" space-y-3 grid grid-cols-1 md:grid-cols-2  items-end">
                <div>
                    <div className=" flex mb-4">
                        <Button className=" rounded-full text-white !bg-black border-[2px] border-white" iconOnly icon={<ArrowDown />}></Button>
                        <Button className=" rounded-full" variant="outline">Work Process</Button>
                    </div>

                    <Text as="h2" size="5xl" weight="bold" color="white" className="max-w-[400px]">
                        My Extensive List of Skills
                    </Text>
                </div>
                <div className=" flex flex-col items-end justify-end ">
                    <Text as="p" size="base" color="gray" className="text-right max-w-[450px] ml-auto">
                        Building the worlds best marketing Your trusted partner for strategy, design, and dev.
                    </Text>
                    <Divider className="max-w-[500px] ml-auto mt-6 bg-gray-800 h-[1px]" />
                </div>
            </div>
            <SkillsSlider />
        </section>
    )
}
