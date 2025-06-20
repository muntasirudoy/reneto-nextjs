import { ArrowLeft, ArrowRight } from "@/components/icons/arrow"
import Button from "@/components/ui/button/button"
import { Card } from "@/components/ui/card/card"
import { skills } from "@/constant"



export const SkillsSlider = () => {
    return (<>

        <Card variant="dark" size="md" className="bg-transparent shadow-none hover:shadow-none border-none">
            <div className="flex justify-end gap-5 mb-6">
                <Button iconOnly icon={<ArrowLeft />} className="rounded-full text-white !bg-black border-[2px] border-white" />
                <Button iconOnly icon={<ArrowRight />} className="rounded-full text-white !bg-black border-[2px] border-white" />
            </div>
            <Card.Grid columns={3} className="gap-10">
                {skills.map((skill, idx) => (
                    <Card
                        key={idx}
                        variant="dark"
                        size="md"
                        className="max-w-[436px]  bg-white/[.09] cursor-pointer hover:scale-110 hover:-rotate-3 hover:-translate-y-2 transition-all duration-700 ease-out transform-gpu"
                    >
                        <Card.GridItem
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                            className="pr-8"
                        />
                    </Card>
                ))}
            </Card.Grid>
        </Card>

    </>)
}