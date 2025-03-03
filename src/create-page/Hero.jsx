import { Button } from "@/components/ui/button"
import Services from "./Services"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bg-gradient-to-t from-[#dfe9f3] to-white ">
      <div className="bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
        <div className="relative w-full flex items-center justify-center">
          <img src="/roca5.jpg" alt="roca5" className="w-[1300px] rounded-[50px] brightness-70 relative top-[150px] object-cover" data-aos="fade-up" />
          <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
            <h1 className="font-semibold" data-aos="fade-down">Roca & Potencia</h1>
            <p className="text-[36px] font-semibold outline">Todo es posible si puedes creer</p>
          </div>
        </div>
      </div>
      <div className="mt-[200px] text-xl font-roboto text-center font-semibold animate">
        <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="0">
          <h1 className="text-[40px] font-bold">¡Bienvenidos!</h1>
          <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
          <p>Te invitamos a ser parte de nuestra comunidad y a fortalecer tu fe con nosotros.</p>
          <h2>"Cuando las fuerzas fallan, Él sostiene.  
              Cuando el camino se nubla, Él ilumina.  
              Cuando parece imposible, Él abre puertas."
          </h2>
          <p className="font-bold">✨ Con Dios, ¡todo es posible! ✨</p>  
        </div>
        <a href="/eventos">
          <div className="mt-4 flex justify-center gap-5" data-aos="fade-up">
            <Button className="text-[22px] font-bold h-[50px] rounded-[100px] border-2 border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl">Proximos eventos</Button>
          </div>        
        </a>

      </div>
      <Services />
      <div className="font-roboto text-center flex flex-col mt-6 pb-6" data-aos="fade-up">
        <h1 className="text-[30px] font-semibold">Tambien Visitanos</h1>
        <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
        <div className="flex justify-center gap-10">
          <a href="https://www.facebook.com/IglesiaRocaYPotencia/?locale=es_LA" target="_blank" className="text-[50px] transition-transform hover:scale-105 hover:opacity-40 shadow-2xl" ><FaFacebook /></a>
          <a href="https://www.youtube.com/channel/UCY4c8J0EmHRjKRu8js6L-hA" target="_blank" className="text-[50px] transition-transform hover:scale-105 hover:opacity-40 shadow-2xl"><FaYoutube /></a>
        </div>
        
      </div>
    </div>
  ) 
}

export default Hero