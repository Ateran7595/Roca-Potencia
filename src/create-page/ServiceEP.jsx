import { Button } from '@/components/ui/button'
import Header from './Header'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

function ServiceEP() {
  return (
    <div className="bg-gradient-to-t from-[#dfe9f3] to-white ">
        <Header />
      <div className="bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
        <div className="relative w-full flex items-center justify-center">
          <img src="/rocaEP.jpg" alt="roca5" className="w-[1300px] rounded-[50px] brightness-70 relative top-[150px] object-cover" data-aos="fade-up" />
          <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
            <h1 className="font-semibold " data-aos="fade-down">Roca & Potencia El Paso</h1>
            <p className="text-[36px] font-semibold outline">Todo es posible si puedes creer</p>
          </div>
        </div>
      </div>
      <div className="mt-[200px] text-xl font-roboto text-center font-semibold animate">
        <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0">
            <h1 className="text-[40px] font-bold">Roca & Potencia El Paso, TX</h1>
            <div className="border-b-3 w-[40%] m-auto mt-2 mb-2"></div>
            <p>915 Delta Drive, El Paso, Texas</p>
            <p>11:00am - 1:30pm</p>
            <p className="font-bold">Te Esperamos!🎉</p>  
            <Button className="text-[22px] font-bold h-[50px] rounded-[100px] border-2 border-black cursor-pointer">Mapa</Button>
        </div>
      </div>
        <Carousel plugins={[Autoplay({ delay: 2000, }), ]} className="flex w-[80%] m-auto items-center justify-center" >
            <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        
    </div>
  )
}

export default ServiceEP