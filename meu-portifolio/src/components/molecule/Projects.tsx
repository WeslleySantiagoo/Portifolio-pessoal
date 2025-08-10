import Card from "@/components/atom/Card"

export default function Projects () {
    return (
        <section id="Projects" className="">
            <p className="flex md:text-4xl md:pt-5 md:pb-5 text-[#5B88A5] text-2xl py-3 font-bold justify-center items-center">
                PROJETOS
            </p>
            <a className="justify-around h-auto flex md:flex-row flex-col  gap-4 md:gap-8 mx-auto md:max-w-7xl px-12 pb-10">
                <Card label="Python | Kivy | KivyMD | KVlang" title="Gerenciador de Estoque" description="Sistema simples e eficiente para controle de produtos, entradas e saídas, com alertas de estoque mínimo e geração de relatórios. Ideal para pequenas e médias empresas que buscam organização e agilidade na gestão do estoque." imageURL="/screen1.webp" link="https://github.com/WeslleySantiagoo/gerenciador-de-estoque"/>
                
                <Card label="React | NextJs | Tailwind | Typescript" title="Portifólio Pessoal" description="Este portfólio reúne meus principais projetos desenvolvidos ao longo da minha trajetória como programador. Cada trabalho apresentado reflete meu comprometimento com soluções funcionais, bem estruturadas e voltadas para resolver problemas reais. O objetivo é demonstrar minhas habilidades em desenvolvimento de sistemas, organização de ideias e capacidade de transformar desafios em produtos digitais com propósito." imageURL="/screen2.webp" link="https://github.com/WeslleySantiagoo/Portifolio-pessoal"/>

                <Card label="Assembly | Jack | HDL" title="Nand2Tetris" description="Construção de um computador do zero, começando com portas lógicas até chegar à criação de uma CPU, memória e linguagem de alto nível. O projeto explora a base do funcionamento de sistemas computacionais, unindo hardware e software em um único processo." imageURL="/screen3.webp" link="https://github.com/WeslleySantiagoo/Nand2Tetris"/>
            </a>
        </section>
    )
}