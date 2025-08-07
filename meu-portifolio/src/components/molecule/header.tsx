'use client';
import Image from "next/image";
import { ModeToggle } from "@/components/atom/ModeToggle";
import { ListHeader } from "@/components/atom/ListHeader";
import logo1 from '@/assets/logo1.svg';
import logo2 from '@/assets/logo2.svg';

const Header = () => {
    return (
        <>
            <nav className='w-full bg-none px-10'>
                <div className="flex flex-row items-center-safe justify-between mx-auto max-w-7xl">
                    <Image src={logo1} width={50} height={50} alt="Logo" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer block dark:hidden"/>
                    <Image src={logo2} width={50} height={50} alt="Logo" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer hidden dark:block"/>
                    <div className="hidden md:flex flex-row items-center gap-8 font-poppins font-semibold">
                        <a className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white"
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
                        <a href="/public/CV-WeslleySantiago.pdf" download="CV-WeslleySantiago.pdf" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white">CV</a>
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
        </>
    )
}

export default Header;