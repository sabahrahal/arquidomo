import { Blinds, Film, Lightbulb, Projector, Speaker, Wifi } from "lucide-react"
import { SingleIcons } from "./SingleIcons"

export const GridIcons = () => {

    const data = [
        {
            title: "Cine en casa",
            description: "Disfruta de una experiencia cinematográfica de alta calidad desde la comodidad de tu sala. Controla proyector, volumen e iluminación desde tu teléfono.",
            icon: <Projector className="text-black" width={180} height={180} />, 
        },
        {
            title: "Audio multizonas",
            description: "Ambienta cada habitación con música gracias a nuestro sistema de audio. Controla la reproducción y volumen desde tu teléfono.",
            icon: <Speaker className="text-black" width={180} height={180} />, 
        },
        {
            title: "Sala multimedia",
            description: "Convierte cualquier habitación en una sala de entretenimiento. Controla dispositivos electrónicos, como TV y videojuegos, de manera sencilla.",
            icon: <Film className="text-black" width={180} height={180} />, 
        },
        {
            title: "Wifi y redes",
            description: "Mantén una conexión estable y rápida en toda tu casa. Administra y optimiza tu red Wi-Fi para un rendimiento óptimo.",
            icon: <Wifi className="text-black" width={180} height={180} />, 
        },
        {
            title: "Control de iluminación",
            description: "Ajusta la iluminación según tus necesidades. Enciende, apaga y regula las luces, crea escenas personalizadas y programa horarios automáticos.",
            icon: <Lightbulb className="text-black" width={180} height={180} />, 
        },
        {
            title: "Cortinas automatizadas",
            description: "Controla tus cortinas desde tu teléfono con un toque. Abre y cierra según la hora del día, la luz exterior o por privacidad.",
            icon: <Blinds className="text-black" width={180} height={180} />, 
        },
    ]

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-8 bg-primary py-[50px] px-2">
            {
                data.map( item => <SingleIcons {...item}/> )
            }
        </section>
    )
}
