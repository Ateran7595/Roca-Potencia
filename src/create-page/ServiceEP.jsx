import { Button } from '@/components/ui/button'
import Header from './Header'
import { useEffect, useState } from 'react'

function ServiceEP() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }

    // Trigger carousel restart on component mount
    setAnimationKey((prev) => prev + 1);
  }, []);

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

      <div className="mt-[200px] text-xl font-roboto text-center font-semibold animate">
        <div className="text-[30px]" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">
          <h1 className="text-[40px] font-bold">Roca & Potencia El Paso, TX</h1>
          <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
          <p>915 Delta Drive, El Paso, Texas</p>
          <p>11:00am - 1:30pm</p>
          <a href="https://www.google.com/maps/place/Templo+La+Potenica+De+Dios/@31.7271681,-106.4935073,14z/data=!4m6!3m5!1s0x86e75904d111d355:0x88355d21d23276b9!8m2!3d31.7573792!4d-106.4793629!16s%2Fg%2F11c1sk1w8n?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target='_blank'>
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
          <img src="ep1.jpg" alt="city" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep2.jpg" alt="beach" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep3.jpg" alt="countryside" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep5.jpg" alt="mountain" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
        </div>
        <div className="relative flex gap-1 z-0 animate-loop-scroll">
          <img src="ep1.jpg" alt="city" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep2.jpg" alt="beach" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep3.jpg" alt="countryside" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
          <img src="ep5.jpg" alt="mountain" className="brightness-75 max-w-none object-cover h-[500px] rounded-2xl" />
        </div>
      </div>
      <div className='bg-[linear-gradient(-225deg,_#CBBACC_0%,_#2580B3_100%)] rounded-t-2xl mt-10 text-white p-4'>
        <h1 className='text-center text-[35px] font-bold outline w-[40%] m-auto font-roboto'>Tambien Se Parte De Nuestro Grupo De Jovenes!</h1>
        
      </div>

    </div>
  );
}

export default ServiceEP;