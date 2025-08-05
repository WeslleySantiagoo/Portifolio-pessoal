import Header from "@/components/header";
import Image from "next/image";
import Weslley from "../assets/Weslley.png"
import Card from "@/components/Card";
import InputField from "@/components/Inputs";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <div className="bg-[url('/waves.svg')] bg-no-repeat py-4">
        <Header/>
        <div className="w-full h-140 justify-around items-center flex flex-row">
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
            </div>
          </div>
          <Image src={Weslley} alt='Foto Pessoal' width={450} height={450}/>
        </div>
        <div className="justify-self-center w-full h-auto grid grid-cols-3 gap-8 max-w-7xl py-7">
          <Card label="Python | Kivy | KivyMD | KVlang" title="Lorem" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." imageURL="/image1.png" link="https://www.google.com"/>

          <Card label="Python | Kivy | KivyMD | KVlang" title="Lorem" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." imageURL="/image1.png" link="teste4"/>

          <Card label="Python | Kivy | KivyMD | KVlang" title="Lorem" description="Lorem ipsum dolor sit amet." imageURL="/image1.png" link="teste4"/>

          <Card label="Python | Kivy | KivyMD | KVlang" title="Lorem" description="Lorem ipsum dolor sit amet." imageURL="/image1.png" link="teste4"/>

          <Card label="Python | Kivy | KivyMD | KVlang" title="Lorem" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.." imageURL="/image1.png" link="teste4"/>

          <Card label="Python | Kivy | KivyMD | KVlang" title="Lorem" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." imageURL="/image1.png" link="teste4"/>
        </div>
        <div className="pb-10 flex justify-center">
          <div className="flex flex-col w-1/2 h-auto bg">
            <InputField label="Nome" example="Weslley" required={true} long={false}/>
            <InputField label="Email" example="example@example.com" required={true} long={false}/>
            <InputField label="Mensagem" example="" required={false} long={true}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
