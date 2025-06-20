"use client"

import { div } from "motion/react-client"
import { Card } from "../ui/card/card"
import Text from "../ui/text/text"



export default function Footer() {


    return (

        <div className=" p-3">
            <Card variant="dark" size="lg" className="bg-black ">
                <div className="flex justify-between items-start mb-16">
                    <Text as="h1" size="2xl" weight="bold" className="text-lime-400">
                        DEVLOP.ME
                    </Text>
                    <Text as="h2" size="5xl" weight="normal" color="white" className="italic">
                        As you can
                    </Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-6">
                        <Text as="h3" size="lg" weight="medium" color="muted">
                            Say hello
                        </Text>
                        <div className="space-y-3">
                            <Text
                                as="p"
                                size="base"
                                color="white"
                                className="cursor-pointer hover:text-lime-400 transition-colors"

                            >
                                HELLO@DEVLOP.ME.COM
                            </Text>
                            <Text
                                as="p"
                                size="base"
                                color="white"
                                className="cursor-pointer hover:text-lime-400 transition-colors"

                            >
                                MAHBUBUL@ME.COM
                            </Text>
                        </div>


                        <div className="space-y-3 mt-8">
                            <Text as="p" size="lg" weight="medium" color="muted">
                                Call
                            </Text>
                            <div className="space-y-2">
                                <Text
                                    as="p"
                                    size="base"
                                    color="white"
                                    className="cursor-pointer hover:text-lime-400 transition-colors"

                                >
                                    +784549 4981 00
                                </Text>
                                <Text
                                    as="p"
                                    size="base"
                                    color="white"
                                    className="cursor-pointer hover:text-lime-400 transition-colors"

                                >
                                    +8845 0100 911
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Text as="h3" size="lg" weight="medium" color="muted">
                            Menu
                        </Text>
                        <div className="space-y-3">
                            {["HOME", "ABOUT", "PORTFOLIO", "BLOG"].map((item) => (
                                <Text
                                    key={item}
                                    as="p"
                                    size="base"
                                    color="white"
                                    className="cursor-pointer hover:text-lime-400 transition-colors"

                                >
                                    {item}
                                </Text>
                            ))}
                        </div>
                    </div>


                    <div className="space-y-6">
                        <Text as="h3" size="lg" weight="medium" color="muted">
                            Social
                        </Text>
                        <div className="space-y-3">
                            {["TWITTER", "INSTAGRAM", "FACEBOOK", "BEHANCE", "DRIBBBLE"].map((item) => (
                                <Text
                                    key={item}
                                    as="p"
                                    size="base"
                                    color="white"
                                    className="cursor-pointer hover:text-lime-400 transition-colors"

                                >
                                    {item}
                                </Text>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-8 border-t border-gray-800">
                    <Text as="h2" size="2xl" weight="bold" color="white">
                        BESNIK
                    </Text>

                    <Text as="p" size="base" color="muted" align="center">
                        © devlop.me 2022
                    </Text>

                    <div className="flex gap-4">
                        <Text
                            as="span"
                            size="base"
                            color="white"
                            className="cursor-pointer hover:text-lime-400 transition-colors"

                        >
                            PRIVACY
                        </Text>
                        <Text as="span" size="base" color="muted">
                            -
                        </Text>
                        <Text
                            as="span"
                            size="base"
                            color="white"
                            className="cursor-pointer hover:text-lime-400 transition-colors"

                        >
                            TERMS
                        </Text>
                    </div>
                </div>
            </Card>
        </div>

    )
}
