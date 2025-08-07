"use client";
interface ButtonProps {
    label: string
    link: string
}


export default function ButtonType3 ({ label,link }: ButtonProps) {
    const HandleClick = () => {
        
    }
    return (
        <>
            <div onClick={HandleClick} className="transition duration-300 ease-in-out hover:scale-105 cursor-pointer flex bg-[#5B88A5] font-poppins font-semibold text-base text-white uppercase items-center justify-around py-3 px-6 my-4">
                {label}
            </div>
        </>
    )
}