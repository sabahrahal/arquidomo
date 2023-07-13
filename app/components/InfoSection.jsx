import { ArrowBigRight } from "lucide-react"
import Image from "next/image"

export const InfoSection = () => {
    return (
        <section className="container px-2 md:px-0 my-[100px] flex flex-col items-center lg:flex lg:flex-row gap-y-6">
            <div className="lg:w-1/2">
                <h2>Descubre La Comodidad Total En Tus Manos</h2>
                <p className="mb-4 text-justify md:text-left">En Arquidomo, transformamos tu hogar en un espacio inteligente con nuestra completa solución de automatización. Descubre los beneficios:</p>

                <p className="flex flex-col mb-2 text-justify md:text-left">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/> Cine en casa</span> 
                Disfruta de una experiencia cinematográfica de alta calidad desde la comodidad de tu sala. Controla proyector, volumen e iluminación desde tu teléfono.
                </p>

                <p className="flex flex-col mb-2 text-justify md:text-left">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Audio multizonas</span> 
                Ambienta cada habitación con música gracias a nuestro sistema de audio. Controla la reproducción y volumen desde tu teléfono.
                </p>

                <p className="flex flex-col mb-2 text-justify md:text-left">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Sala multimedia</span> 
                Convierte cualquier habitación en una sala de entretenimiento. Controla dispositivos electrónicos, como TV y videojuegos, de manera sencilla.
                </p>

                <p className="flex flex-col mb-2 text-justify md:text-left">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Wifi y redes</span> 
                Mantén una conexión estable y rápida en toda tu casa. Administra y optimiza tu red Wi-Fi para un rendimiento óptimo.
                </p>

                <p className="flex flex-col mb-2 text-justify md:text-left">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Control de iluminación</span> 
                Ajusta la iluminación según tus necesidades. Enciende, apaga y regula las luces, crea escenas personalizadas y programa horarios automáticos.
                </p>

                <p className="flex flex-col mb-2 text-justify md:text-left">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Cortinas automatizadas</span> 
                Controla tus cortinas desde tu teléfono con un toque. Abre y cierra según la hora del día, la luz exterior o por privacidad.
                </p>
            </div>

            <div className="mx-auto xs:w-[100px]">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <Image className="aspect-[9/16] object-cover object-center" 
                            src={"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/6c/3b/a6/6c3ba6c6-8aed-de2c-0e19-6f1dfea207a5/2e5ea8c3-43bc-4863-b52f-568d6b8391a9_SPL-01.png/643x0w.jpg"} 
                            width={320} height={500} alt="phone decoration"/> 
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
