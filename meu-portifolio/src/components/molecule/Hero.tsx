import ButtonType1 from "@/components/atom/Button1";
import ButtonType2 from "@/components/atom/Button2";
import Image from "next/image";
import Weslley from "@/assets/WeslleyPNG.svg"
import FloatingItem from "@/components/atom/FloatingItem";


export default function Hero () {
    return (
        <section id="Hero" className="w-full h-140 justify-around items-center flex flex-row">
          <div className="w-128 flex flex-col gap-4">
            <h1 className="text-4xl text-[#243A69] font-bold block dark:hidden">DESENVOLVEDOR BACKEND</h1> 
            <h1 className="text-4xl text-[#5B88A5] font-bold hidden dark:block">DESENVOLVEDOR BACKEND</h1> 
            <div>
                <p className="text-3xl font-semibold py-0.5">
                  Olá, sou Weslley Santiago
                </p>
                <p className="text-2xl font-poppins">
                  Sou desenvolvedor backend com foco em Python. Tenho experiência em construir aplicações robustas usando Firebase para banco de dados e autenticação, além de desenvolver interfaces com Kivy para projetos desktop e mobile.
                </p>
                <div className="flex flex-row justify-start gap-4">
                  <ButtonType1 label="Projetos" link="#Projects"/>
                  <ButtonType2 label="GitHub" link="https://www.github.com/WeslleySantiagoo"/>
                </div>
            </div>
          </div>
          <div className="relative">
            <FloatingItem link="https://developer.mozilla.org/en-US/docs/Web/CSS"path="/icons/CSS.svg" alt="CSS Icon" className="absolute top-10 left-0" />
            <FloatingItem link="https://www.figma.com" path="/icons/Figma.svg" alt="Figma Icon" className="absolute right-1 bottom-20" />
            <FloatingItem link="https://firebase.google.com" path="/icons/Firebase.svg" alt="Firebase Icon" className="absolute bottom-25 left-5" />
            <FloatingItem link="https://developer.mozilla.org/en-US/docs/Web/HTML" path="/icons/Html.svg" alt="HTML Icon" className="absolute bottom-50 right-5"/>
            <FloatingItem link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" path="/icons/Javascript.svg" alt="JavaScript Icon" className="absolute top-40"/>
            <FloatingItem link="https://kivymd.readthedocs.io" path="/icons/KivyMD.svg" alt="KivyMD Icon" className="absolute top-28 right-0"/>
            <FloatingItem link="https://nextjs.org/" path="/icons/NextJs.svg" alt="NextJs Icon" className="absolute bottom-45 left-14"/>
            <FloatingItem link="https://www.python.org/" path="/icons/Python.svg" alt="Python Icon" className="absolute top-35 right-25"/>
            <FloatingItem link="https://tailwindcss.com/" path="/icons/Tailwind.svg" alt="Tailwind Icon" className="absolute top-28 left-20"/>
            <FloatingItem link="https://www.typescriptlang.org/" path="/icons/Typescript.svg" alt="Typescript Icon" className="absolute top-10 right-32"/>
            <FloatingItem link="https://www.notion.so" path="/icons/Notion.svg" alt="Notion Icon" className="absolute top-10 left-25"/>
            <FloatingItem link="https://react.dev/" path="/icons/React.svg" alt="React Icon" className="absolute top-5 right-10"/>
            <Image src={Weslley} alt='Foto Pessoal' width={450} height={450} className=""/>
          </div>
        </section>
    )
}