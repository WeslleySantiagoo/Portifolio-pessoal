import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';

const Header = () => {
    return (
        <>
            <nav className='w-full bg-none'>
                <div className="flex flex-row items-center justify-between mx-auto max-w-7xl">
                    <Image src={logo1} width={50} height={50} alt="Logo" className="block dark:hidden"/>
                    <Image src={logo2} width={50} height={50} alt="Logo" className="hidden dark:block"/>
                    <div className="flex flax-row items-center gap-8 font-poppins font-semibold">
                        <span className="text-white">Sobre mim</span>
                        <span className="text-white">Projetos</span>
                        <span className="text-white">CV</span>
                        <span className="text-white">Contato</span>
                        <ModeToggle/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;