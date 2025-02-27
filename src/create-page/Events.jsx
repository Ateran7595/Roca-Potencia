import Header from "./Header"

function Events() {
  return (
    <div>
        <Header />
        <div className="bg-[linear-gradient(120deg,_#c79af0_0%,_#6aa8f0_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
            <div className="relative w-full flex items-center justify-center">
            <img src="/roca5.jpg" alt="roca5" className="w-[1300px] rounded-[50px] brightness-70 relative top-[150px] object-cover" data-aos="fade-up" />
            <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
                <h1 className="font-semibold" data-aos="fade-down">Proximos Eventos</h1>
                <p className="text-[36px] font-semibold outline">No Te Los Puedes Perder!</p>
            </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Events