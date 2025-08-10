"use client"

import * as React from "react"
import { AlignJustify, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ListHeader() {
  const { setTheme } = useTheme()
  const abrirCV = () => {
    window.open("/CV-WeslleySantiago.pdf", "_blank", "noopener,noreferrer");
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          <AlignJustify className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
          <AlignJustify className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setTimeout(() => {
              const destino = document.getElementById("Hero");
              destino?.scrollIntoView({ behavior: "smooth" });
            }, 200); // 300 milissegundos de delay
          }}
        >
          Sobre mim
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setTimeout(() => {
              const destino = document.getElementById("Projects");
              destino?.scrollIntoView({ behavior: "smooth" });
            }, 200); // 200 milissegundos de delay
          }}
        >
          Projetos
        </DropdownMenuItem>
        <a onClick={abrirCV}><DropdownMenuItem className="cursor-pointer">CV</DropdownMenuItem></a>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setTimeout(() => {
              const destino = document.getElementById("Contato");
              destino?.scrollIntoView({ behavior: "smooth" });
            }, 200); // 200 milissegundos de delay
          }}
        >
          Contato
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row w-full justify-center gap-3">
            <Button variant={"outline"} size={"sm"} onClick={() => setTheme("light")}>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
            </Button>
            <Button variant={"outline"} size={"sm"} onClick={() => setTheme("dark")}>
              <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
            </Button>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
