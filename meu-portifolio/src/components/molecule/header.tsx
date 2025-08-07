import Image from "next/image";
import { ModeToggle } from "@/components/atom/ModeToggle";
import logo1 from '@/assets/logo1.svg';
import logo2 from '@/assets/logo2.svg';

const Header = () => {
    return (
        <>
            <nav className='w-full bg-none'>
                <div className="flex flex-row items-center-safe justify-between mx-auto max-w-7xl">
                    <Image src={logo1} width={50} height={50} alt="Logo" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer block dark:hidden"/>
                    <Image src={logo2} width={50} height={50} alt="Logo" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer hidden dark:block"/>
                    <div className="flex flax-row items-center gap-8 font-poppins font-semibold">
                        <a href="#Hero" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white">Sobre mim</a>
                        <a href="#Projects" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white">Projetos</a>
                        <a href="/public/CV-WeslleySantiago.pdf" download="CV-WeslleySantiago.pdf" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white">CV</a>
                        <a href="#Contato" className="transition duration-300 ease-in-out hover:scale-110 cursor-pointer text-white">Contato</a>
                        <ModeToggle/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;