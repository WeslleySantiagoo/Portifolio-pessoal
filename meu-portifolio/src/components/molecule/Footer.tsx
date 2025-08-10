"use client";

import Image from "next/image";
import instagram from "@/assets/InstagramDark.svg"
import linkedin from "@/assets/LinkedinDark.svg"
import github from "@/assets/GitHubDark.svg"
import instagramLight from "@/assets/Instagram.svg"
import linkedinLight from "@/assets/Linkedin.svg"
import githubLight from "@/assets/GitHub.svg"

export default function Footer () {
    const HandleClick1 = () => {
        window.open("https://www.instagram.com/weeslllley__/", "_blank", "noopener,noreferrer")
    }
    const HandleClick2 = () => {
        window.open("https://www.linkedin.com/in/weslley-santiago/", "_blank", "noopener,noreferrer")
    }
    const HandleClick3 = () => {
        window.open("https://github.com/WeslleySantiagoo/", "_blank", "noopener,noreferrer")
    }
    return (
        <div className="flex flex-row px-10 mb-2 md:px-0 items-center justify-between mx-auto max-w-7xl">
            <p className="font-merriweather font-bold md:text-base text-xs"> Realizado por Weslley Gabriel de Oliveira Santiago</p>

            <div className="block dark:hidden"><nav className="flex flex-row items-center gap-2">
                <div onClick={HandleClick1} className="cursor-pointer"><Image src={instagramLight} alt="Instagram" width={30} height={30}/></div>
                <div onClick={HandleClick2} className="cursor-pointer"><Image src={linkedinLight} alt="X - Twitter" width={35} height={35}/></div>
                <div onClick={HandleClick3} className="cursor-pointer"><Image src={githubLight} alt="GitHub" width={30} height={30}/></div>
            </nav></div>

            <div className="hidden dark:block"><nav className="flex flex-row items-center gap-2">
                <div onClick={HandleClick1} className=" cursor-pointer"><Image src={instagram} alt="Instagram" width={30} height={30}/></div>
                <div onClick={HandleClick2} className="scale-101 cursor-pointer"><Image src={linkedin} alt="X - Twitter" width={30} height={30}/></div>
                <div onClick={HandleClick3} className=" cursor-pointer"><Image src={github} alt="GitHub" width={30} height={30}/></div>
            </nav></div>
        </div>
    )
}
