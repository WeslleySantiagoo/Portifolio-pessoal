"use client";
interface ButtonProps {
    label: string
}


export default function ButtonType3 ({ label, }: ButtonProps) {
    const HandleClick = () => {
        // window.open(link, "_blank");
    }
    return (
        <div tabIndex={-1} draggable={false} onClick={HandleClick} className={`transition duration-300 ease-in-out cursor-pointer flex bg-[#5b88a5] font-semibold text-base text-white uppercase items-center justify-around py-3 px-6 my-4 select-none md:${"hover:scale-105"}`}>
            {label}
        </div>
    )
}