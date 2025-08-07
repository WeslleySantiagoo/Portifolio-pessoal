"use client";

import Image from "next/image";
import instagram from "@/assets/InstagramDark.svg"
import x from "@/assets/XDark.svg"
import github from "@/assets/GitHubDark.svg"
import instagramLight from "@/assets/Instagram.svg"
import xLight from "@/assets/X.svg"
import githubLight from "@/assets/GitHub.svg"

export default function Footer () {
    const HandleClick1 = () => {
        window.open("https://www.instagram.com/weeslllley__/", "_blank")
    }
    const HandleClick2 = () => {
        window.open("não_tenho", "_blank")
    }
    const HandleClick3 = () => {
        window.open("https://github.com/WeslleySantiagoo/", "_blank")
    }
    return (
        <>
            <div className="flex flex-row px-10 md:px-0 items-center justify-between mx-auto max-w-7xl">
                <p className="font-poppins font-bold md:text-base text-xs"> Realizado por Weslley Gabriel de Oliveira Santiago</p>

                <div className="block dark:hidden"><nav className="flex flex-row gap-2">
                    <div onClick={HandleClick1} className="cursor-pointer"><Image src={instagramLight} alt="Instagram" width={30} height={30}/></div>
                    <div onClick={HandleClick2} className="cursor-pointer"><Image src={xLight} alt="X - Twitter" width={30} height={30}/></div>
                    <div onClick={HandleClick3} className="cursor-pointer"><Image src={githubLight} alt="GitHub" width={30} height={30}/></div>
                </nav></div>

                <div className="hidden dark:block"><nav className="flex flex-row gap-2">
                    <div onClick={HandleClick1} className=" cursor-pointer"><Image src={instagram} alt="Instagram" width={30} height={30}/></div>
                    <div onClick={HandleClick2} className=" cursor-pointer"><Image src={x} alt="X - Twitter" width={30} height={30}/></div>
                    <div onClick={HandleClick3} className=" cursor-pointer"><Image src={github} alt="GitHub" width={30} height={30}/></div>
                </nav></div>
            </div>
        </>
    )
}
