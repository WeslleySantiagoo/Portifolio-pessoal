"use client";
import Image from "next/image";

interface CardProps {
    label: string;
    title: string;
    description: string;
    imageURL: string;
    link: string;
}
function Card({ label, title, description, imageURL, link }: CardProps) {
    const HandleClick = () => {
        window.open(link, "_blank");
    }

    return (
        <>
        <div onClick={HandleClick} className="md:w-1/3 transition duration-300 ease-in-out hover:scale-107 cursor-pointer bg-accent h-auto w-auto px-4 py-4 justify flex flex-col gap-4 rounded-2xl border-1 border-[#383838]">
            <div className="">
                <Image src={imageURL} width={500} height={100} alt="Imagem do projeto" className="rounded-2xl justify-self-center w-full"/>
            </div>
            <div className="text-sm flex flex-col gap-2">
                <span>{label}</span>
                <p className="font-inter font-semibold">{title}</p>
                <p className="self-start">{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card;