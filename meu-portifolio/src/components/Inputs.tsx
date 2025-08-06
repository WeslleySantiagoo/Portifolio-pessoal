"use client";
import { useState } from "react";

interface InputProps {
    label: string;
    example: string;
    required: boolean;
    long: boolean
}

export default function InputField({ label, example, required, long }: InputProps) {
  const [nome, setNome] = useState("");

  return (
    <>
    <div className="font-poppins">
        <p className="pl-2 mt-2">{label} {required && <span className="text-red-600"> *</span>}</p>
        <textarea
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={example}
            maxLength={70} 
            className={`focus:outline-none focus:border-[#243A69] dark:focus:border-[#5B88A5] font-poppins resize-none border border-[#858C94] p-2 rounded-lg w-full ${long ? "h-30 flex text-left text-pretty items-center break-words whitespace-pre-wrap": "h-12 flex text-left whitespace-nowrap overflow-hidden align-bottom pr-2"}`}
        />
        {/* <p className="mt-2">Você digitou: {nome}{required && <span className="text-red-600"> *</span>}</p> */}
    </div>
    </>
  );
}