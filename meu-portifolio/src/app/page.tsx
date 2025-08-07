import Header from "@/components/molecule/header";
import Hero from "@/components/molecule/Hero";
import Projects from "@/components/molecule/Projects";
import Contact from "@/components/molecule/Contact";
import Footer from "@/components/molecule/Footer"


export default function Home() {
  return (
    <div className="md:bg-[url('/waves.svg')] bg-none bg-no-repeat bg-[top_right]">
      <Header/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
