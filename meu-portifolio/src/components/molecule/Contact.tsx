import InputField from "@/components/atom/Inputs"
import ButtonType3 from "@/components/atom/Button3"

export default function Contact () {
    return (
        <a id="Contato" className="py-5 pb-10 flex justify-center">
          <div className="flex flex-col lg:w-1/2 md:w-7/10 w-9/10 h-auto">
            <div className="relative inline-block">
                <div className="absolute right-1 top-1 w-full h-full bg-[#5B88A5]"></div>
                <div className="relative flex items-center justify-center bg-[#243A69] px-4 py-2 text-2xl text-white font-poppins uppercase">
                  FALE COMIGO
                </div>
              </div>
              <p className="flex justify-center items-center text-center pt-2 font-poppins text-sm pb-8">
                Está em busca de um desenvolvedor backend para seu próximo projeto? Será um prazer colaborar com soluções em Python e Firebase. Entre em contato comigo!
              </p>
            <div>
              <InputField label="Nome" example="Weslley" required={true} long={false}/>
              <InputField label="Email" example="example@example.com" required={true} long={false}/>
              <InputField label="Mensagem" example="" required={false} long={true}/>
              <ButtonType3 label="enviar mensagem"/>
            </div>
          </div>
        </a>
    )
}