"use client";
interface ButtonProps {
    label: string
    link: string
}


export default function ButtonType1 ({ label,link }: ButtonProps) {
    return (
        <>
            <a href={link} className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer flex bg-[#243A69] text-white font-poppins text-2xl rounded-2xl w-auto items-center justify-around py-3 px-6 my-4">
                {label}
            </a>
        </>
    )
}