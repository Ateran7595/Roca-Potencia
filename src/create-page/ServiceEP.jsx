import { Button } from '@/components/ui/button'
import Header from './Header'
import { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ServiceEP() {
  const images = ['/ep6.jpg','/ep7.jpg','/EPJ.jpg', '/EPJ2.jpg', '/EPJ3.jpg']

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

  const imageSrcs = [
  "ep1.jpg",
  "ep2.jpg",
  "ep3.jpg",
  "ep5.jpg"
];

const imageStyles = "brightness-75 max-w-none object-cover lg:h-[500px] md:h-[400px] xs:h-[270px] rounded-2xl";


  return (
    <div className="bg-gradient-to-t from-[#dfe9f3] to-white ">
      <Header />
      <div className="bg-[linear-gradient(-225deg,_#CBBACC_0%,_#2580B3_100%)] flex flex-col items-center justify-center w-full p-5 lg:h-[900px] relative">
        <div className="relative w-full flex items-center justify-center">
          <img src="/rocaEP.jpg" alt="roca5" className="w-[1300px] md:rounded-[50px] sm:rounded-[30px] xs:rounded-[20px] brightness-70 relative md:top-[150px] sm:top-[100px] xs:top-[60px] object-cover" data-aos="fade-up" />
          <div className="absolute text-white xl:bottom-[620px] lg:bottom-[410px] md:bottom-[260px] sm:bottom-[240px] xs:bottom-[130px] text-center" data-aos="fade-down">
            <h1 className="font-semibold lg:text-[80px] md:text-[60px] sm:text-[50px] xs:text-[30px]" data-aos="fade-down">Roca & Potencia El Paso</h1>
            <p className="lg:text-[36px] md:text-[25px] sm:text-[20px] md:w-full xs:w-[90%] m-auto font-semibold border-solid border-2">Todo es posible si puedes creer</p>
          </div>
        </div>
      </div>

      <div className="md:mt-[200px] sm:mt-[120px] xs:mt-[80px] lg:text-xl md:text-[18px] lg:w-full xs:w-[90%] m-auto font-roboto text-center font-semibold animate ">
        <div className="md:text-[30px] xs:text-[22px]" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">
          <h1 className="md:text-[40px] xs:text-[28px] font-bold">Roca & Potencia El Paso, TX</h1>
          <div className="border-b-3 border-solid md:w-[40%] sm:w-[60%] xs:w-[75%] m-auto mt-2 mb-2"></div>
          <p>915 Delta Drive, El Paso, Texas</p>
          <p>Domingos: 11:00am - 1:30pm</p>
          <p>Viernes: 7pm - 9pm</p>
          <a href="https://www.google.com/maps/place/Templo+La+Potenica+De+Dios/@31.7271681,-106.4935073,14z/data=!4m6!3m5!1s0x86e75904d111d355:0x88355d21d23276b9!8m2!3d31.7573792!4d-106.4793629!16s%2Fg%2F11c1sk1w8n?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target='_blank'>
            <Button className="text-[22px] mt-3 font-bold h-[50px] rounded-[100px] border-2 border-solid border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl" >Mapa</Button>
          </a>
        </div>
        <div className="md:text-[30px] xs:text-[22px] mt-15" data-aos="zoom-in-down">
          <div className="border-2 border-solid rounded-xl lg:w-[40%] m-auto mt-2 mb-2">
            <h1 className="md:text-[40px] xs:text-[26px] font-bold">Escuela Dominical Todas Edades</h1>
          </div>
          <p>Domingos: 9am - 10:30am</p>
        </div>
      </div>

      <div className='mt-15 mb-4 lg:w-[30%] xs:w-[90%] m-auto border-solid border-2 rounded-xl' data-aos="fade-down">
        <h1 className='lg:text-[30px] xs:text-[26px] font-bold font-roboto text-center shadow-2xl'>Clases Para Niños Desde Edades 3-10+</h1>
      </div>

      {/* Add a unique key to force rerender */}
      <div className="flex gap-1 w-full overflow-hidden" data-aos="zoom-in-down" key={animationKey}>
        {[...Array(2)].map((_, index) => (
          <div className="relative flex gap-1 z-0 animate-loop-scroll" key={index}>
            {imageSrcs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`RPEP-${i}`}
                className={imageStyles}
              />
            ))}
          </div>
        ))}
      </div>
      <div className='bg-[linear-gradient(-225deg,_#CBBACC_0%,_#2580B3_100%)] rounded-t-2xl mt-10 text-white p-4 pt-15'>
        <h1 className='text-center md:text-[35px] xs:text-[26px] font-bold border-solid border-2 md:w-[40%] xs:w-[90%] m-auto font-roboto' data-aos="fade-down" >Tambien Se Parte De Nuestro Grupo De Jovenes!</h1>
        <div>
          <div className='m-auto flex justify-center mt-10 mb-8' data-aos="fade-down" >
            <img src={images[currentI]}
                 alt={`Slide ${currentI + 1}`}  
                 className={`rounded-2xl md:w-[850px] xs:w-[400px] md:h-[650px] xs:h-[270px] object-cover transition-opacity duration-700 ease-in-out shadow-xl ${fade ? 'opacity-0' : 'opacity-100'}`} />
          </div>
          <div className="md:text-[30px] xs:text-[22px] font-bold text-center font-roboto" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos="fade-zoom-in" >
            <h1 className="md:text-[40px] xs:text-[28px] font-bold">Roca & Potencia Generacion 316</h1>
            <div className="border-b-3 border-solid md:w-[40%] sm:w-[60%] xs:w-[75%] m-auto mt-2 mb-2"></div>
            <p>Todos Los Viernes</p>
            <p>7:00pm - 9:00pm</p>
            <div className='flex justify-center items-center gap-5'>
              <a href="https://www.instagram.com/rocapotencia_yth?igsh=c2l2bXUzcTRiODNp" target='_blank' className='flex justify-center mt-5 text-[45px] transition-transform hover:scale-105 hover:opacity-70' ><FaInstagram /></a>
              <a href="https://chat.whatsapp.com/L6GDaOYaCLR8zCUn7NPgPx" target='_blank' className='flex justify-center mt-5 text-[45px] transition-transform hover:scale-105 hover:opacity-70'  ><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className='mt-10 mb-8' data-aos="fade-up" >
          <video
            src="/videos/jovenes3.mp4"
            className="m-auto flex justify-center items-center rounded-2xl md:h-[650px] xs:h-[550px] "
            controls
            loop
          />
        </div>
        <div className="md:text-[30px] xs:text-[22px] font-bold text-center font-roboto" data-aos="fade-down" >
          <h1 className="md:text-[40px] xs:text-[28px] font-bold ">No Te Pierdas Ninguno De Nuestros Eventos!</h1>
          <div className="border-b-3 border-solid w-[55%] m-auto mt-2 mb-5"></div>
          <a href="/eventos">
            <Button className="mb-10 text-white shadow-2xl text-[30px] font-bold h-[50px] rounded-[100px] border-3 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
              Proximos Eventos
            </Button>          
          </a>

        </div>
        <div>
          <p onClick={handleScrollToTop} className='text-center text-[40px] cursor-pointer'>🔝</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceEP;