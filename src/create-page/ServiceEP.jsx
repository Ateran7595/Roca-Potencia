import { Button } from '@/components/ui/button'
import Header from './Header'
import { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";


function ServiceEP() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (window.AOS) {
      // Initialize AOS if not already done
      AOS.init({
        duration: 1000, // Set a default duration for animation
        once: true, // Trigger animation only once when scrolled into view
        easing: 'ease-in-out', // Define easing function
      });}

      AOS.refresh();

    // Trigger carousel restart on component mount
    setAnimationKey((prev) => prev + 1);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bg-gradient-to-t from-[#dfe9f3] to-white ">
      <Header />
      <div className="bg-[linear-gradient(-225deg,_#CBBACC_0%,_#2580B3_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
        <div className="relative w-full flex items-center justify-center">
          <img src="/rocaEP.jpg" alt="roca5" className="w-[1300px] rounded-[50px] brightness-70 relative top-[150px] object-cover" data-aos="fade-up" />
          <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
            <h1 className="font-semibold" data-aos="fade-down">Roca & Potencia El Paso</h1>
            <p className="text-[36px] font-semibold outline">Todo es posible si puedes creer</p>
          </div>
        </div>
      </div>

      <div className="mt-[200px] font-roboto text-center font-semibold ">
        <div className="text-[30px]" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">
          <h1 className="text-[40px] font-bold">Roca & Potencia El Paso, TX</h1>
          <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
          <p>915 Delta Drive, El Paso, Texas</p>
          <p>Domingos: 11:00am - 1:30pm</p>
          <p>Viernes: 7pm - 9pm</p>
          <a href="https://www.google.com/maps/place/Templo+La+Potenica+De+Dios/@31.7271681,-106.4935073,14z/data=!4m6!3m5!1s0x86e75904d111d355:0x88355d21d23276b9!8m2!3d31.7573792!4d-106.4793629!16s%2Fg%2F11c1sk1w8n?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target='_blank'>
            <Button className="text-[22px] mt-3 font-bold h-[50px] rounded-[100px] border-2 border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl" >Mapa</Button>
          </a>
        </div>
        <div className="text-[30px] mt-15">
          <div className="border-2 rounded-xl w-[40%] m-auto mt-2 mb-2">
            <h1 className="text-[40px] font-bold">Escuela Dominical Todas Edades</h1>
          </div>
          <p>Domingos: 9am - 11:00am</p>
        </div>
      </div>

      <div className='mt-15 mb-4 w-[30%] m-auto outline-3 rounded-xl' data-aos="fade-down">
        <h1 className='text-[30px] font-bold font-roboto text-center shadow-2xl'>Clases Para Niños Desde Edades 3-10+</h1>
      </div>

      {/* Add a unique key to force rerender */}
      <div className="flex gap-1 w-full overflow-hidden" data-aos="zoom-in-down" key={animationKey}>
        <div className="relative flex gap-1 z-0 animate-loop-scroll">
          <img src="ep1.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep2.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep3.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep5.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
        </div>
        <div className="relative flex gap-1 z-0 animate-loop-scroll">
          <img src="ep1.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep2.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep3.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep5.jpg" alt="RPEP" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
        </div>
      </div>
      <div className='bg-[linear-gradient(-225deg,_#CBBACC_0%,_#2580B3_100%)] rounded-t-2xl mt-10 text-white p-4 pt-15'>
        <h1 className='text-center text-[35px] font-bold outline w-[40%] m-auto font-roboto'data-aos="fade-down" >Tambien Se Parte De Nuestro Grupo De Jovenes!</h1>
        <div>
          <div className='m-auto flex justify-center mt-10 mb-8' data-aos="fade-down" >
            <img src="ep6.jpg" alt="ep6" className='rounded-2xl w-[850px]' />
          </div>
          <div className="text-[30px] font-bold text-center font-roboto" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos="fade-zoom-in" >
            <h1 className="text-[40px] ">Roca & Potencia Generacion 316</h1>
            <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
            <p>Todos Los Viernes</p>
            <p>7:00pm - 9:00pm</p>
            <a href="https://www.instagram.com/rocapotencia_yth?igsh=c2l2bXUzcTRiODNp" target='_blank' className='flex justify-center mt-5 text-[45px] transition-transform hover:scale-105 hover:opacity-70' ><FaInstagram /></a>
          </div>
        </div>
        <div className='mt-10 mb-8' data-aos="fade-up" >
          <video
            src="/videos/jovenes3.mp4"
            className="m-auto flex justify-center items-center rounded-2xl h-[650px]"
            controls
            loop
          />
        </div>
        <div className="text-[30px] font-bold text-center font-roboto" data-aos="fade-down" >
          <h1 className="text-[40px] ">No Te Pierdas Ninguno De Nuestros Eventos!</h1>
          <div className="border-b-3 w-[55%] m-auto mt-2 mb-5"></div>
          <Button className="mb-10 text-white shadow-2xl text-[30px] font-bold h-[50px] rounded-[100px] border-3 border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
            Proximos Eventos
          </Button>
        </div>
        <div>
          <p onClick={handleScrollToTop} className='text-center text-[40px] cursor-pointer'>🔝</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceEP;