import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between items-center font-roboto bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)] p-6'>
      <div className='flex items-center gap-2 '>
        <img src="/RPlogo.png" alt="logo" className='w-[90px] h-[90px]' />
        <p className='font-bold text-[35px] text-neutral-800'>Roca & Potencia</p>
      </div>
      <div className='flex gap-5'>
        <Button className="text-white text-[22px] font-bold w-[150px] h-[50px] rounded-[100px] border-3 border-white">Servicios</Button>
        <Button className="text-white text-[22px] font-bold w-[150px] h-[50px] rounded-[100px] border-3 border-white">Eventos</Button>
        <Button className="text-white text-[22px] font-bold w-[150px] h-[50px] rounded-[100px] border-3 border-white">Acerca</Button>
      </div>
    </div>
  )
}

export default Header