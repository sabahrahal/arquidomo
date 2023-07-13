import { ArrowBigRight } from "lucide-react"
import Image from "next/image"

export const InfoSection = () => {
    return (
        <section id="info_section" className="container px-2 md:px-0 my-[100px] flex flex-col items-center lg:flex lg:flex-row gap-y-6">
            <div className="lg:w-1/2">
                <h2>Ventajas de un Hogar Automatizado</h2>
                <p className="mb-4 text-justify">Descubre las ventajas de tener un hogar automatizado con Arquidomo. Simplifica tu vida, disfruta del confort y la comodidad, y aprovecha al máximo la tecnología para crear un ambiente personalizado en tu hogar.</p>

                <p className="flex flex-col mb-2 text-justify">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Conveniencia</span> 
                Controla todos los aspectos de tu hogar desde tu teléfono, brindando comodidad y accesibilidad en cada espacio.
                </p>

                <p className="flex flex-col mb-2 text-justify">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Ahorro de energía</span> 
                Programa horarios para el encendido y apagado automático de luces y dispositivos, reduciendo el consumo energético.
                </p>

                <p className="flex flex-col mb-2 text-justify">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Seguridad mejorada</span> 
                Vigila tu hogar desde cualquier lugar con sistemas de cámaras y sensores integrados, manteniendo tu tranquilidad.
                </p>

                <p className="flex flex-col mb-2 text-justify ">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Entretenimiento envolvente</span> 
                Crea una experiencia de cine en casa, con sonido envolvente y control de iluminación para una inmersión completa.
                </p>

                <p className="flex flex-col mb-2 text-justify">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Conectividad total</span> 
                Optimiza tu red Wi-Fi, asegurando una conexión estable para todos tus dispositivos y permitiendo una comunicación fluida.
                </p>

                <p className="flex flex-col mb-2 text-justify">
                <span className="flex items-center uppercase text-primary font-bold"><ArrowBigRight/>Ambientes personalizados</span> 
                Ajusta la iluminación, las cortinas y el audio para cada momento del día, creando ambientes acogedores y funcionales.
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
