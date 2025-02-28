import { Link } from "react-router-dom";

function Services() {
  // Function to scroll to the top smoothly
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      id="service"
      className="font-roboto flex flex-col justify-center items-center mt-[80px] pb-[100px] text-white bg-gradient-to-tl from-[#9bc5c3] to-[#616161] rounded-t-4xl rounded-b-4xl"
    >
      <h1 className="text-[40px] font-bold pt-5 text-center">
        Una Iglesia
        <br />
        Dos Congregaciones
      </h1>
      <div>
        {/* <Link to={"/serviceep"} onClick={handleScrollToTop}> */}
        <a href="/serviceep">
          <div
            className="flex mt-10 p-3 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-white hover:rounded-2xl"
            data-aos="fade-right"
          >
            <div>
              <img
                src="/rep.jpg"
                alt="rocaElPaso"
                className="w-[400px] h-[300px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center p-5 font-semibold">
              <h1 className="text-[45px]">Roca & Potencia El Paso</h1>
              <p className="text-[22px] pl-1.5 outline">
                E Delta Dr, El Paso, TX 79901
                <br />
                ←Mas Informacion
              </p>
            </div>
          </div></a>
        {/* </Link> */}

        <Link to={"/servicejz"} onClick={handleScrollToTop}>
          <div
            className="flex mt-10 p-3 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-white hover:rounded-2xl"
            data-aos="fade-left"
          >
            <div className="flex flex-col justify-center p-5 font-semibold text-end">
              <h1 className="text-[45px]">Roca & Potencia Juarez</h1>
              <p className="text-[22px] pr-1.5 outline">
              Av 5 de Febrero, 32240 Juárez, Chih., Mexico
                <br />
                Mas Informacion →
              </p>
            </div>
            <div>
              <img
                src="/RJ.jpg"
                alt="rocaJuarez"
                className="w-[400px] h-[300px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Services;