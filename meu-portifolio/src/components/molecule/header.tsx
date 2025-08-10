'use client';
import Image from "next/image";
import { ModeToggle } from "@/components/atom/ModeToggle";
import { ListHeader } from "@/components/atom/ListHeader";
import logo1 from '@/assets/logo1.svg';
import logo2 from '@/assets/logo2.svg';
import { useEffect, useState } from "react";

const Header = () => {

    const abrirCV = () => {
    window.open("/CV-WeslleySantiago.pdf", "_blank", "noopener,noreferrer");
    };
    
    const abrirSite = () => {
    window.open("https://portifolio-pessoal-lac.vercel.app/", "_blank", "noopener,noreferrer");
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768); // até 768px é "mobile"
        };

        checkScreen(); // verifica na montagem
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

return (
    <div>
        {isMobile ? (
            <nav className='w-screen py-2 px-4'>
                <div className="flex flex-row items-center-safe justify-between mx-auto max-w-7xl">
                   <Image onClick={abrirSite} src={logo1} width={40} height={40} alt="Logo" className="select-none transition duration-400 ease-in-out hover:scale-110 cursor-pointer block dark:hidden"/>
                   <Image onClick={abrirSite} src={logo2} width={40} height={40} alt="Logo" className="select-none transition duration-300 ease-in-out hover:scale-110 cursor-pointer hidden dark:block"/>
                   <div className="flex md:hidden">
                       <ListHeader/>
                   </div>
               </div>
            </nav>
        ) : (
            <nav className='bg-none px-10'>
                <div className="flex flex-row items-center-safe justify-between mx-auto max-w-7xl">
                   <Image onClick={abrirSite} src={logo1} width={50} height={50} alt="Logo" className="select-none transition duration-300 ease-in-out hover:scale-110 cursor-pointer block dark:hidden"/>
                   <Image onClick={abrirSite} src={logo2} width={50} height={50} alt="Logo" className="select-none transition duration-300 ease-in-out hover:scale-110 cursor-pointer hidden dark:block"/>
                   <div className="hidden md:flex flex-row items-center gap-8 font-semibold">
                       <a className="transition duration-300 ease-in-out hover:scale-112 cursor-pointer text-white"
                       onClick={() => {
                           setTimeout(() => {
                           const destino = document.getElementById("Hero");
                           destino?.scrollIntoView({ behavior: "smooth" });
                           }, 200); // 200 milissegundos de delay
                       }}
                       >Sobre mim</a>
                       <a className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white"
                       onClick={() => {
                           setTimeout(() => {
                           const destino = document.getElementById("Projects");
                           destino?.scrollIntoView({ behavior: "smooth" });
                           }, 200); // 200 milissegundos de delay
                       }}
                       >Projetos</a>
                       <a 
                           onClick={abrirCV}
                           className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white">
                           CV
                       </a>
                       <a className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white"
                       onClick={() => {
                           setTimeout(() => {
                           const destino = document.getElementById("Contato");
                           destino?.scrollIntoView({ behavior: "smooth" });
                           }, 200); // 200 milissegundos de delay
                       }}
                       >Contato</a>
                       <ModeToggle/>
                   </div>
                   <div className="flex md:hidden">
                       <ListHeader/>
                   </div>
               </div>
            </nav>
    )}
    </div>
    )
}

export default Header;