import { useEffect, useState } from "react"
import Header from "./Header"

function About() {
    const images = ['/roca3.jpg','/jz13.jpg','/jz10.jpg']

    const [currentI, setCurrentI] = useState(0)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true)
            setTimeout(() => {
                setCurrentI((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                )
                setFade(false)
            }, 500) // Match the fade duration
        }, 5000)

        return () => clearInterval(intervalId)
    }, [images.length])

    return (
        <div>
            <Header />
            <div className="bg-[linear-gradient(120deg,_#66b8e4_0%,_#5ee6a8_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
                <div className="relative w-full flex items-center justify-center" data-aos="fade-up">
                    <img src="/aboutRP.jpg" alt="roca5" className="w-[1300px] h-[875px] rounded-[50px] brightness-70 relative top-[150px] object-cover" />
                    <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
                        <h1 className="font-semibold" data-aos="fade-down">Nuestra Vision</h1>
                        <p className="text-[36px] font-semibold outline">Viviendo Plenamente En Dios</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-[250px] w-[80%] m-auto gap-15 mb-20">
                <div className=" w-[50%] flex flex-col gap-4 font-roboto text-[23px]" data-aos="fade-right">
                    <h1 className="text-[40px] font-semibold">Nuestra Vision</h1>
                    <p>Como siervos de Dios, nuestra misión es servir y ayudar a quienes más lo necesitan, guiándonos siempre por la Palabra de Dios. Nos esforzamos por preparar una generación de niños, jóvenes y adultos que no solo conozcan el Evangelio, sino que también lo proclamen con valentía en sus escuelas, trabajos y hogares, llevando luz a donde más se necesita.</p>
                    <p>Creemos firmemente que entregar nuestra vida a Cristo y vivir plenamente en Él no solo nos lleva a una vida victoriosa, sino a una vida <b>más que victoriosa.</b> Porque sabemos que con Cristo, <b>todo es posible!</b></p>
                    <p>Nuestro deseo es que el mensaje de salvación y esperanza de Jesucristo llegue a cada rincón del mundo, comenzando por nuestros hogares. Confiamos en que Su palabra nunca regresa vacía, sino que transforma vidas con Su abundante <b>misericordia, paz y amor</b> para todo aquel que cree en su corazón.</p>
                    <p ><span className="font-semibold">Marcos 9:23</span> <i>"Jesús le dijo: Si puedes creer, al que cree todo le es posible."</i> </p>
                </div>
                <div className="overflow-hidden pt-20" data-aos="fade-left">
                    <img
                        src={images[currentI]}
                        alt={`Slide ${currentI + 1}`}
                        className={`w-[400px] h-[500px] object-cover transition-opacity duration-700 ease-in-out shadow-xl rounded-2xl ${fade ? 'opacity-0' : 'opacity-100'}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default About