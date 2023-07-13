import { Blinds, Film, Lightbulb, Projector, Speaker, Wifi } from "lucide-react"
import { SingleIcons } from "./SingleIcons"

export const GridIcons = () => {

    const data = [
        {
            title: "Cine en casa",
            description: "Disfruta de una experiencia cinematográfica de alta calidad desde la comodidad de tu sala. Controla proyector, volumen e iluminación desde tu teléfono.",
            image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp",
            alt: "Imagen cine en casa" 
        },
        {
            title: "Audio multizonas",
            description: "Ambienta cada habitación con música gracias a nuestro sistema de audio. Controla la reproducción y volumen desde tu teléfono.",
            image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/audio_multizonas_pwe2gh.webp",
            alt: "Imagen audio multizonas" 
        },
        {
            title: "Sala multimedia",
            description: "Convierte cualquier habitación en una sala de entretenimiento. Controla dispositivos electrónicos, como TV y videojuegos, de manera sencilla.",
            image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/sala_multimedia_jtdlce.webp",
            alt: "Imagen sala multimedia" 
        },
        {
            title: "Wifi y redes",
            description: "Mantén una conexión estable y rápida en toda tu casa. Administra y optimiza tu red Wi-Fi para un rendimiento óptimo.",
            image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238705/Aquidomo/wifi_y_redes_ggv386.webp",
            alt: "Imagen wifi y redes" 
        },
        {
            title: "Control de iluminación",
            description: "Ajusta la iluminación según tus necesidades. Enciende, apaga y regula las luces, crea escenas personalizadas y programa horarios automáticos.",
            image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/control_de_iluminacion_nvbf1v.webp",
            alt: "Imagen control de iluminación" 
        },
        {
            title: "Cortinas automatizadas",
            description: "Controla tus cortinas desde tu teléfono con un toque. Abre y cierra según la hora del día, la luz exterior o por privacidad.",
            image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238705/Aquidomo/cortinas_automaticas_qvviad.webp",
            alt: "Imagen cortinas automatizadas" 
        },
    ]

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-4 gap-y-8 bg-primary py-[50px] px-2">
            {
                data.map( item => <SingleIcons key={item.title} {...item}/> )
            }
        </section>
    )
}
