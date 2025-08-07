"use client"

import * as React from "react"
import { AlignJustify } from "lucide-react"
import Image from "next/image"
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
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
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
        <a href="/public/CV-WeslleySantiago.pdf" download="CV-WeslleySantiago.pdf"><DropdownMenuItem className="cursor-pointer">CV</DropdownMenuItem></a>
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
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => setTheme("light")}>
          Theme Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => setTheme("dark")}>
          Theme Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => setTheme("system")}>
          Theme System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
