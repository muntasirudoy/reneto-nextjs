import { Atom } from "lucide-react";

export const skills = [
    {
        title: "HTML & CSS",
        description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        icon: Atom,
    },
    {
        title: "Javascript",
        description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        icon: Atom,
    },
    {
        title: "Webflow",
        description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        icon: Atom,
    },
]

export const workProcess = [
    {
        variant: "dark",
        className: "bg-white/5 backdrop-blur-sm bg-black group-hover:!bg-primary group hover:scale-105 transition-all duration-500 ease-in-out hover:-rotate-3 hover:-translate-y-2 hover:text-secondary",
        tag: { text: "Discovery", bg: "bg-cyan-400", textColor: "text-black" },
        description:
            "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
        button: { textColor: "text-white/70 hover:text-white" },
    },
    {
        variant: "dark",
        className: "bg-white/5 backdrop-blur-sm bg-black  hover:bg-primary group hover:scale-105 transition-all duration-500 ease-in-out hover:-rotate-3 hover:-translate-y-2 hover:text-secondary",
        tag: { text: "Strategy", bg: "bg-cyan-400", textColor: "text-black" },
        description:
            "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews, were here to set the stage for success.",
        button: { textColor: "text-white/70 hover:text-white" },
    },
    {
        variant: "dark",
        className: "bg-white/5 backdrop-blur-sm bg-black  hover:bg-primary group hover:scale-105 transition-all duration-500 ease-in-out hover:-rotate-3 hover:-translate-y-2 hover:text-secondary",
        tag: { text: "Design", bg: "bg-cyan-400", textColor: "text-black" },
        description:
            "After we have a comprehensive understanding of your brand, well be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
        button: { textColor: "text-white/70 hover:text-white" },
    },
    {
        variant: "dark",
        className: "bg-white/5 backdrop-blur-sm bg-black  hover:bg-primary group hover:scale-105 transition-all duration-500 ease-in-out hover:-rotate-3 hover:-translate-y-2 hover:text-secondary",
        tag: { text: "Build", bg: "bg-cyan-400", textColor: "text-black" },
        description:
            "Whether weve just finished designing your new site or youre handing off finished designs for us to develop in Webflow, were here to apply our trusted development process to your project.",
        button: { textColor: "text-white/70 hover:text-white" },
    },
]
