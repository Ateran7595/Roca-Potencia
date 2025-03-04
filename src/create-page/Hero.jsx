import { Button } from "@/components/ui/button"
import Services from "./Services"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Hero() {

  return (
    <div className="bg-gradient-to-t from-[#dfe9f3] to-white ">
      <div className="bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)] flex flex-col items-center justify-center w-full p-5 lg:h-[900px] relative">
        <div className="relative w-full flex items-center justify-center">
          <img src="/roca5.jpg" alt="roca5" className="w-[1300px] md:rounded-[50px] sm:rounded-[30px] xs:rounded-[20px] brightness-70 relative md:top-[150px] sm:top-[100px] xs:top-[60px] object-cover" data-aos="fade-up" />
          <div className="absolute text-white lg:bottom-[610px] md:bottom-[260px] sm:bottom-[240px] xs:bottom-[130px] text-center" data-aos="fade-down">
            <h1 className="font-semibold lg:text-[100px] md:text-[70px] sm:text-[50px] xs:text-[35px]" >Roca & Potencia</h1>
            <p className="lg:text-[36px] md:text-[25px] sm:text-[20px] font-semibold outline">Todo es posible si puedes creer</p>
          </div>
        </div>
      </div>
      <div className="md:mt-[200px] sm:mt-[120px] xs:mt-[80px] lg:text-xl md:text-[18px] lg:w-full xs:w-[90%] m-auto font-roboto text-center font-semibold animate">
        <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0">
          <h1 className="md:text-[40px] xs:text-[30px] font-bold">¡Bienvenidos!</h1>
          <div className="border-b-4 md:w-[40%] sm:w-[60%] xs:w-[75%] m-auto mt-2 mb-2"></div>
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
        <div className="border-b-4 md:w-[40%] sm:w-[60%] xs:w-[75%] m-auto mt-2 mb-2"></div>
        <div className="flex justify-center gap-10">
          <a href="https://www.facebook.com/IglesiaRocaYPotencia/?locale=es_LA" target="_blank" className="text-[50px] transition-transform hover:scale-105 hover:opacity-40 shadow-2xl" ><FaFacebook /></a>
          <a href="https://www.youtube.com/channel/UCY4c8J0EmHRjKRu8js6L-hA" target="_blank" className="text-[50px] transition-transform hover:scale-105 hover:opacity-40 shadow-2xl"><FaYoutube /></a>
        </div>
      </div>
    </div>
  ) 
}

export default Hero