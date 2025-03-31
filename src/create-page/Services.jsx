import { GiClick } from "react-icons/gi";


function Services() {

  return (
    <div
      id="service"
      className="font-roboto flex flex-col justify-center items-center mt-[80px] md:pb-[100px] xs:pb-[50px] text-white bg-[linear-gradient(-20deg,#616161_0%,#9bc5c3_100%)] rounded-t-4xl rounded-b-4xl"
    >
      <h1 className="md:text-[40px] sm:text-[30px] xs:text-[25px] font-bold pt-5 text-center">
        Una Iglesia
        <br />
        Dos Congregaciones
      </h1>
      <div className="xs:p-5">
        <a href="/serviceep">
          <div
            className="flex lg:flex-row xs:flex-col justify-center items-center md:mt-10 xs:mt-4 p-3 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-solid hover:border-white hover:rounded-2xl"
            data-aos="zoom-in"
          >
            <div>
              <img
                src="/rep.jpg"
                alt="rocaElPaso"
                className="sm:w-[400px] sm:h-[300px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center p-5 font-semibold lg:text-start xs:text-center">
              <h1 className="md:text-[45px] xs:text-[30px]">Roca & Potencia El Paso</h1>
              <p className="md:text-[22px] xs:text-[18px] pl-1.5 border-solid border-2">
                E Delta Dr, El Paso, TX 79901
                <br />
                <span className="flex items-center lg:justify-start xs:justify-center"><GiClick />Mas Informacion</span>
              </p>
            </div>
          </div>
        </a>
        
        <a href="/servicejz">
          <div
            className="flex lg:flex-row xs:flex-col mt-10 p-3 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-solid hover:border-white hover:rounded-2xl"
            data-aos="zoom-in"
          >
            <div className="flex flex-col justify-center p-5 font-semibold lg:text-end xs:text-center">
              <h1 className="md:text-[45px] xs:text-[30px]">Roca & Potencia Juarez</h1>
              <p className="md:text-[22px] xs:text-[18px] pr-1.5 border-solid border-2">
              Av 5 de Febrero, 32240 Juárez, Chih., Mexico
                <br />
                <span className="flex items-center lg:justify-end xs:justify-center">Mas Informacion<GiClick /></span>
              </p>
            </div>
            <div>
              <img
                src="/RJ.jpg"
                alt="rocaJuarez"
                className="sm:w-[400px] xs:w-[370px] sm:h-[300px] xs:h-[190px] object-cover rounded-2xl m-auto"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Services;