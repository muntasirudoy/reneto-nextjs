import Button from "@/components/ui/button/button"
import Text from "@/components/ui/text/text"
import Image from "next/image"

export const ZigzagButtons = () => {
    return (
        <div className=" flex justify-between gap-16 mt-14 items-end relative">
            <Text size="xl" weight="bold" className="text-center mb-4 text-black max-w-[200px]">
                PREVIOUSLY WORKED ON
            </Text>
            <div className=" flex-1  ">
                <div className="flex  gap-5">
                    <Image width={250} height={50} src={'/buttons/b2.svg'} className=" rotate-[25deg] translate-x-20" alt="btn" />
                    <Image width={250} height={50} src={'/buttons/b2.svg'} className="translate-x-12 -translate-y-5" alt="btn" />
                    <Image width={250} height={50} src={'/buttons/b2.svg'} className="rotate-[25deg] translate-x-5 " alt="btn" />

                </div>
                <div className="flex  gap-5">
                    <Image width={250} height={50} src={'/buttons/b1.svg'} className=" " alt="btn" />
                    <Image width={250} height={50} src={'/buttons/b3.svg'} className=" -rotate-6 -translate-y-4 " alt="btn" />
                    <Image width={250} height={50} src={'/buttons/b4.svg'} className="-translate-x-9" alt="btn" />
                </div>
            </div>
        </div>
    )
}