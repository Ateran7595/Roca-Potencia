import { Button } from '@/components/ui/button'
import Header from './Header'
import { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ServiceJZ() {
  const images = ['/JZJ.jpg','/JZJ2.jpg','/JZJ3.jpg', '/JZJ4.jpg', '/JZJ5.jpg', '/JZJ6.jpg']

  const [currentI, setCurrentI] = useState(0)
  const [fade, setFade] = useState(false)
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          setFade(true)
          setTimeout(() => {
              setCurrentI((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
              setFade(false)
          }, 500) // Match the fade duration
      }, 5000)

      return () => clearInterval(intervalId)
  }, [images.length])

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
    <div>
        <Header  />
        <div className="bg-[linear-gradient(-20deg,_#fc6076_0%,_#ff9a44_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
          <div className="relative w-full flex items-center justify-center">
            <img src="/roca4.jpg" alt="roca5" className="w-[1300px] rounded-[50px] brightness-70 relative top-[150px] object-cover" data-aos="fade-up" />
            <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
              <h1 className="font-semibold" data-aos="fade-down">Roca & Potencia Juarez</h1>
              <p className="text-[36px] font-semibold outline">Todo es posible si puedes creer</p>
            </div>
          </div>
        </div>

      <div className="mt-[200px] font-roboto text-center font-semibold ">
        <div className="text-[30px]" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">
          <h1 className="text-[40px] font-bold">Roca & Potencia Juarez, Chihuahua</h1>
          <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
          <p>Av 5 de Febrero 1927, 32240 Juárez, Chih., Mexico</p>
          <p>Domingos: 2:30pm - 4:30pm</p>
          <p>Jueves: 6pm - 8pm</p>
          <a href="https://www.google.com/maps/place/Iglesia+Roca+y+Potencia+Ciudad+Ju%C3%A1rez/@31.7247692,-106.4833243,19z/data=!4m14!1m7!3m6!1s0x86e75904d111d355:0x88355d21d23276b9!2sTemplo+La+Potenica+De+Dios!8m2!3d31.7573792!4d-106.4793629!16s%2Fg%2F11c1sk1w8n!3m5!1s0x86e759d8d7dafc5d:0xbc7e51fe5e12bcfd!8m2!3d31.7244694!4d-106.4826614!16s%2Fg%2F11hdcgrv4m?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target='_blank'>
            <Button className="text-[22px] mt-3 font-bold h-[50px] rounded-[100px] border-2 border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl" >Mapa</Button>
          </a>
        </div>
      </div>

      <div className='mt-15 mb-4 w-[30%] m-auto outline-3 rounded-xl' data-aos="fade-down">
        <h1 className='text-[30px] font-bold font-roboto text-center shadow-2xl'>Clases Para Niños Desde Edades 3-10+</h1>
      </div>

      {/* Add a unique key to force rerender */}
      <div className="flex gap-1 w-full overflow-hidden" data-aos="zoom-in-down" key={animationKey}>
        <div className="relative flex gap-1 z-0 animate-loop-scroll">
          <img src="jz3.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="roca2.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="jz8.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="jz12.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="jz7.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          
        </div>
        <div className="relative flex gap-1 z-0 animate-loop-scroll">
          <img src="jz3.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="roca2.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="jz8.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="jz12.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="jz7.jpg" alt="RPJuarez" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          
        </div>
      </div>
      <div className='bg-[linear-gradient(-20deg,_#fc6076_0%,_#ff9a44_100%)] rounded-t-2xl mt-10 text-white p-4 pt-15'>
        <h1 className='text-center text-[35px] font-bold outline w-[40%] m-auto font-roboto'data-aos="fade-down" >Tambien Se Parte De Nuestro Grupo De Jovenes!</h1>
        <div>
          <div className='m-auto flex justify-center mt-10 mb-8' data-aos="fade-down" >
            <img src={images[currentI]}
                 alt={`Slide ${currentI + 1}`} 
                 className={`rounded-2xl w-[850px] h-[650px] object-cover transition-opacity duration-700 ease-in-out shadow-xl ${fade ? 'opacity-0' : 'opacity-100'}`} />
          </div>
          <div className="text-[30px] font-bold text-center font-roboto" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos="fade-zoom-in" >
            <h1 className="text-[40px] ">Roca & Potencia Youth</h1>
            <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
            <p>Todos Los Lunes Via Zoom</p>
            <p>8:30pm - 9:30pm</p>
            <div className='flex justify-center items-center gap-5'>
              <a href="https://www.instagram.com/proposito_jovenes?igsh=YWJjbzRxajl2eXV2&utm_source=qr" target='_blank' className='flex justify-center mt-5 text-[45px] transition-transform hover:scale-105 hover:opacity-70' ><FaInstagram /></a>
              <a href="https://chat.whatsapp.com/JA89oqduxHmLFg90vGdmbz" target='_blank' className='flex justify-center mt-5 text-[45px] transition-transform hover:scale-105 hover:opacity-70'  ><FaWhatsapp /></a>
            </div>
            
          </div>
        </div>
        <div className='mt-10 mb-8' data-aos="fade-up" >
          <img src="/jzLunes.jpg" alt="zoom" className='flex justify-center items-center m-auto rounded-2xl w-[700px]' />
        </div>
        <div className="text-[30px] font-bold text-center font-roboto" data-aos="fade-down" >
          <h1 className="text-[40px] ">Visita Nuestros Proximos Eventos!</h1>
          <div className="border-b-3 w-[55%] m-auto mt-2 mb-5"></div>
          <Link to={'/eventos'} onClick={handleScrollToTop}>
            <Button className="mb-10 text-white shadow-2xl text-[30px] font-bold h-[50px] rounded-[100px] border-3 border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
              Proximos Eventos
            </Button>          
          </Link>

        </div>
        <div>
          <p onClick={handleScrollToTop} className='text-center text-[40px] cursor-pointer'>🔝</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceJZ