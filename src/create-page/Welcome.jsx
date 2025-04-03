import React from 'react'
import Header from './Header'
import { Button } from '@/components/ui/button'

function Welcome() {
  return (
    <div>
        <Header />
        <div className="bg-[linear-gradient(to_top,#a3bded_0%,#6991c7_100%)] flex flex-col items-center justify-center w-full p-5 lg:h-[900px] relative">
            <div className="relative w-full flex flex-col items-center justify-center">
                <img src="/test5.jpg" alt="roca5" className="w-[1300px] md:rounded-[50px] sm:rounded-[30px] xs:rounded-[20px] brightness-70 relative md:top-[150px] sm:top-[100px] xs:top-[60px] object-cover" data-aos="fade-up" />
                <div className="absolute text-white lg:bottom-[610px] md:bottom-[260px] sm:bottom-[240px] xs:bottom-[130px] text-center" data-aos="fade-down">
                    <h1 className="font-semibold lg:text-[100px] md:text-[70px] sm:text-[50px] xs:text-[35px]" data-aos="fade-down">Bienvenido!</h1>
                    <p className="lg:text-[36px] md:text-[25px] sm:text-[20px] font-semibold border-solid border-2">Estamos Felices De Que Estes Aqui</p>
                </div>
            </div>
        </div>
        <div>
            <a href="/">
            <div className="mt-4 flex justify-center gap-5 md:mt-[200px] sm:mt-[120px] xs:mt-[80px] mb-[100px]" >
                <Button className="text-[22px] font-bold h-[50px] rounded-[100px] border-2 border-solid border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl">Ir Al Inicio</Button>
            </div>        
            </a> 
        </div>
    </div>
  )
}

export default Welcome