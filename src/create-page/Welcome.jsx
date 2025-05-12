import React from 'react'
import Header from './Header'
import { Button } from '@/components/ui/button'
import PageWrapper from './PageWrapper'

function Welcome() {
  return (
    <PageWrapper>
    <div>
        <div className="bg-[linear-gradient(to_top,#a3bded_0%,#6991c7_100%)] flex flex-col items-center justify-center w-full p-5 lg:h-[900px] relative">
            <div className="relative w-full flex flex-col items-center justify-center">
                <img src="/test5.jpg" alt="roca5" className="w-[1300px] md:rounded-[50px] sm:rounded-[30px] xs:rounded-[20px] brightness-70 relative md:top-[150px] sm:top-[100px] xs:top-[60px] object-cover" data-aos="fade-up" />
                <div className="absolute text-white lg:bottom-[610px] md:bottom-[260px] sm:bottom-[240px] xs:bottom-[130px] text-center" data-aos="fade-down">
                    <h1 className="font-semibold lg:text-[100px] md:text-[70px] sm:text-[50px] xs:text-[35px]" data-aos="fade-down">Bienvenido!</h1>
                    <p className="lg:text-[36px] md:text-[25px] sm:text-[20px] font-semibold border-solid border-2">Estamos Felices De Que Estes Aqui</p>
                </div>
            </div>
        </div>
        <div className="md:mt-[200px] sm:mt-[120px] xs:mt-[80px] lg:text-xl md:text-[18px] lg:w-[70%] xs:w-[80%] m-auto text-center animate"
         data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-offset="0"
        >
            <div>
                <h1 className="md:text-[40px] xs:text-[30px] font-bold">Llamado de Dios</h1>
                <div className="border-b-4 border-solid md:w-[40%] sm:w-[60%] xs:w-[75%] m-auto mt-2 mb-2"></div>
                <p>En la biblia Dios nos enseña que cuando volvemos a Él con un corazon sincero y lo buscamos, Él nos dejara
                    encontrarlo mientras haya tiempo. Su amor por ti es inagotable, y con paciencia te espara para restaurarte, sostenerte y guiarte. 
                    Sus puertas siempre estan abiertas para todos los que desean buscarlo. Y este dia Él nos anima a volver a Él con un corazon 
                    humilde. Dios, el unico que restaura con amor y gracia.</p>
                <h2 className='mt-6 font-semibold'>"«Aun ahora», declara el Señor,
                        «Vuelvan a Mí de todo corazón,
                        Con ayuno, llanto y lamento.
                        Rasguen su corazón y no sus vestidos».
                        Vuelvan ahora al Señor su Dios,
                        Porque Él es compasivo y clemente,
                        Lento para la ira, abundante en misericordia,
                        Y se arrepiente de infligir el mal."
                </h2>
                <h2 className='font-bold md:text-[18px] xs:text-[18px] mt-2'>Joel 2:12-13</h2>
            </div>
            <a href="/">
                <div className="mt-4 flex justify-center gap-5  mb-[100px]" >
                    <Button className="md:text-[18px] xs:text-[15px] font-bold h-[50px] rounded-[100px] border-2 border-solid border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl">Explorar Más</Button>
                </div>        
            </a>
        </div>
    </div>
    </PageWrapper>
  )
}

export default Welcome