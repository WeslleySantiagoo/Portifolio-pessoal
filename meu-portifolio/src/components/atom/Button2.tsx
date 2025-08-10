"use client";
interface ButtonProps {
    label: string
    link: string
    scale: string
}


export default function ButtonType2 ({ label,link,scale }: ButtonProps) {
    const HandleClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    }
    return (
        <div draggable={false} className={`scale-${scale} select-none`}>
            <div onClick={HandleClick} className="transition duration-300 ease-in-out md:hover:scale-110 cursor-pointer flex bg-none border-2 border-foreground text-2xl rounded-2xl items-center justify-around py-3 px-6 my-4">
                {label}
            </div>
        </div>
    )
}