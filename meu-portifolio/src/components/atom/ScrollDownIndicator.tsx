import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface ScrollDownIndicatorProps {
  className: string
}

export default function ScrollDownIndicator({ className }: ScrollDownIndicatorProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // para setar logo no carregamento

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={() => {
        setTimeout(() => {
        const destino = document.getElementById("Projects");
        destino?.scrollIntoView({ behavior: "smooth" });
        }, 200); // 200 milissegundos de delay
        setShow(false)
      }}
      className={`${className}
        fixed bottom-8 left-1/2 -translate-x-1/2
        transition-opacity duration-200 animate-bounce
        ${show ? " dark:opacity-30 opacity-75 cursor-pointer" : "opacity-0 pointer-events-none"}
        z-50
      `}
      aria-label="Scroll down indicator"
    >
      <ArrowDown className="text-foreground"/>
    </div>
  );
}