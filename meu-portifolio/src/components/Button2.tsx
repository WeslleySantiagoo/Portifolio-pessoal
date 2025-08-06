"use client";
interface ButtonProps {
    label: string
}


export default function ButtonType2 ({ label }: ButtonProps) {
    const HandleClick = () => {
        // window.open(link, "_blank");
    }
    return (
        <>
            <div onClick={HandleClick} className="transition duration-300 ease-in-out hover:scale-110    cursor-pointer flex bg-none border-2 border-foreground font-poppins text-2xl rounded-2xl items-center justify-around py-3 px-6 my-4">
                {label}
            </div>
        </>
    )
}