import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center font-roboto bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)] p-6' >
      <a href="/">
        <div className='flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer' data-aos="fade-zoom-in" >
          <img src="/RPlogo.png" alt="logo" className='w-[90px] h-[90px]' />
          <p className='font-bold text-[35px] text-white'>Roca & Potencia</p>
        </div> 
      </a>
      <div className='flex gap-5' data-aos="fade-zoom-in" >
        <a href="#service"><Button className="text-white shadow-2xl text-[22px] font-bold w-[150px] h-[50px] rounded-[100px] border-3 border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">Servicios</Button></a>
        <Button className="text-white shadow-2xl text-[22px] font-bold w-[150px] h-[50px] rounded-[100px] border-3 border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">Eventos</Button>
        <Button className="text-white shadow-2xl text-[22px] font-bold w-[150px] h-[50px] rounded-[100px] border-3 border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70 ">Acerca</Button>
      </div>
    </div>
  )
}

export default Header