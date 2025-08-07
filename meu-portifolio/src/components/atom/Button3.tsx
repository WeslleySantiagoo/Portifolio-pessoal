"use client";
interface ButtonProps {
    label: string
}


export default function ButtonType3 ({ label, }: ButtonProps) {
    const HandleClick = () => {
        // window.open(link, "_blank");
    }
    return (
        <>
            <div onClick={HandleClick} className="transition duration-300 ease-in-out hover:scale-105 cursor-pointer flex bg-[#5B88A5] font-poppins font-semibold text-base text-white uppercase items-center justify-around py-3 px-6 my-4">
                {label}
            </div>
        </>
    )
}