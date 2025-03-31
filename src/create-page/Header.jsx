import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMediaQuery } from 'react-responsive';

function Header() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const location = useLocation(); // Get the current page URL
  const isLandingPage = location.pathname === '/'; // Check if we are on the landing page
  const isServicePageEP = location.pathname === '/serviceep';
  const isServicePageJZ = location.pathname === '/servicejz';
  const isAboutPage = location.pathname === '/acerca';
  const isEventPage = location.pathname === '/eventos'

  const headerBackground = isLandingPage
  ? 'bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)]'
  : isServicePageEP
  ? 'bg-[linear-gradient(-225deg,#CBBACC_0%,#2580B3_100%)]'
  : isServicePageJZ
  ? "bg-[linear-gradient(-20deg,_#fc6076_0%,_#ff9a44_100%)]"
  : isAboutPage
  ? "bg-[linear-gradient(120deg,_#5ee6a8_0%,_#66b8e4_100%)]"
  : isEventPage
  ? 'bg-[linear-gradient(120deg,_#c79af0_0%,_#6aa8f0_100%)]'
  : 'bg-gray-800'
  

  return (
    <div className={`flex lg:flex-row xs:flex-col xs:gap-4 xs:flex-wrap justify-between items-center font-roboto ${headerBackground} p-6`}>
      <a href="/">
        <div className='flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer' data-aos="fade-zoom-in">
          <img src="/RPlogo.png" alt="logo" className='sm:w-[90px] sm:h-[90px] xs:w-[65px] xs:h-[65px]' />
          <p className='font-bold sm:text-[35px] xs:text-[30px] text-white'>Roca & Potencia</p>
        </div>
      </a>
      <div className='flex xs:flex-wrap justify-center gap-5' data-aos="fade-zoom-in">
      {isSmallScreen ? (
        <Sheet>
          <SheetTrigger>
              <Button className="flex justify-center items-center text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
                <IoMenu />Menu
              </Button>
          </SheetTrigger>
          <SheetContent className={`${headerBackground} font-roboto flex items-center gap-8`} >
            <SheetHeader >
              <SheetTitle className='text-center text-[30px] text-white'>Menu</SheetTitle>
            </SheetHeader>
            {isLandingPage && (
              <a href="#service">
                <SheetClose>
                  <Button className="text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
                    Servicios
                  </Button>
                </SheetClose> 
              </a>
            )}
            <a href="/eventos">
              <Button className="text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
                Eventos
              </Button>
            </a>
            <a href="/acerca">
              <Button className="text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
                Acerca
              </Button>
            </a>
          </SheetContent>
        </Sheet>
      ) : 
      (
        <>
          {isLandingPage && (
            <a href="#service">
              <Button className="text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
                Servicios
              </Button>
            </a>
          )}
          <a href="/eventos">
            <Button className="text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
              Eventos
            </Button>
          </a>
          <a href="/acerca">
            <Button className="text-white shadow-2xl text-[22px] font-bold sm:w-[150px] sm:h-[50px] xs:w-[137px] xs:h-[37px] rounded-[100px] border-2 border-solid border-white cursor-pointer transition-transform hover:scale-105 hover:opacity-70">
              Acerca
            </Button>
          </a>
        </>
      )}
      </div>
    </div>
  );
}

export default Header;