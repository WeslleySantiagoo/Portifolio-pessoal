"use client";
interface ButtonProps {
    label: string
    scale:string
}


export default function ButtonType1 ({ label,scale }: ButtonProps) {
    return (
        <div draggable={false} className={`scale-${scale} select-none`}>
            <a 
            onClick={() => {
                           setTimeout(() => {
                           const destino = document.getElementById("Projects");
                           destino?.scrollIntoView({ behavior: "smooth" });
                           }, 200); // 200 milissegundos de delay
                       }}
            className="transition duration-300 ease-in-out md:hover:scale-110 cursor-pointer flex bg-[#243A69] text-white text-2xl rounded-2xl w-auto items-center justify-around py-3 px-6 my-4">
                {label}
            </a>
        </div>
    )
}