import Header from "@/components/molecule/header";
import Hero from "@/components/molecule/Hero";
import Projects from "@/components/molecule/Projects";
import Contact from "@/components/molecule/Contact";
import Footer from "@/components/molecule/Footer"


export default function Home() {
  return (
    <div className="bg-[url('/waves.svg')] bg-no-repeat py-4">
      <Header/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
