
function Services() {

  return (
    <div id="service" className="font-roboto flex flex-col justify-center items-center mt-[80px] pb-[100px] text-white bg-gradient-to-tl from-[#9bc5c3] to-[#616161] rounded-t-4xl rounded-b-4xl">
      <h1 className="text-[40px] font-bold pt-5 text-center">Una Iglesia<br></br> Dos Congregaciones</h1>
      <div>
        <div className="flex mt-10 cursor-pointer " >
          <div><img src="/rep.jpg" alt="rocaElPaso" className="w-[400px] h-[300px] object-cover rounded-2xl" /></div>   
          <div className="flex flex-col justify-center p-5 font-semibold">
            <h1 className="text-[45px]">Roca & Potencia El Paso</h1>
            <p className="text-[22px] pl-1.5 outline">E Delta Dr, El Paso, TX 79901<br></br>←Mas Informacion</p>
          </div>
        </div>
        <div className="flex mt-10 cursor-pointer">
          <div className="flex flex-col justify-center p-5 font-semibold text-end">
            <h1 className="text-[45px]">Roca & Potencia Juarez</h1>
            <p className="text-[22px] pr-1.5 outline">E Delta Dr, El Paso, TX 79901<br></br>Mas Informacion→</p>
            
          </div>
          <div><img src="/RJ.jpg" alt="rocaElPaso" className="w-[400px] h-[300px] object-cover rounded-2xl" /></div>   
        </div>
      </div>
    </div>
  )
}

export default Services