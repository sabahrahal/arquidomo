import { PageLayout } from "../pageLayout/PageLayout"

export const metadata = () => {
  return {
    title: "Sala Multimedia | Arquidomo - Automatización de Hogares",
    description:
      "Crea una sala multimedia versátil y excepcionalmente entretenida con los servicios de Arquidomo. Disfruta de cine, música y más en cada rincón de tu hogar.",
    keywords: ["sala multimedia", "entretenimiento en casa", "control de dispositivos","Arquidomo" ],
  };
};

const page = () => {
  const data = {
    h1: "Sala multimedia", 
    firstSection: {
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp",
      h2Title: "Crea una Experiencia Multimedia en Todo tu Hogar con una Sala Multimedia",
      p:"Imagina tener una sala multimedia en cada rincón de tu casa, donde puedas disfrutar de entretenimiento de alta calidad y sumergirte en experiencias audiovisuales excepcionales. Con una sala multimedia en tu hogar, podrás disfrutar de películas, series, videojuegos y música en cualquier momento y lugar. Cada habitación se transforma en un espacio de entretenimiento personalizado, con tecnología de vanguardia que ofrece una calidad de imagen impresionante y un sonido envolvente. No importa si estás relajándote en el dormitorio, compartiendo momentos en la sala de estar o disfrutando de una noche de cine en el sótano, una sala multimedia en toda tu casa te brinda la libertad de disfrutar del entretenimiento como desees. Descubre la versatilidad y la emoción de una sala multimedia en todo tu hogar con Arquidomo."
    },
    secondSection: {
      h3Title: "Tecnología Retráctil para una Experiencia Multimedial sin Límites",
      p: "La tecnología retráctil es la clave para optimizar el espacio y personalizar tu experiencia multimedia. Desde pantallas y proyectores retráctiles hasta sistemas de sonido ocultos, podrás adaptar tu sala multimedia a diferentes necesidades y momentos. Disfruta de un ambiente limpio y estético cuando no estés utilizando la sala y despliega la tecnología cuando desees sumergirte en una experiencia inmersiva. Con soluciones de tecnología retráctil, podrás aprovechar al máximo el espacio y tener un diseño versátil en tu sala multimedia. En Arquidomo, te ofrecemos soluciones personalizadas de tecnología retráctil para mejorar tu experiencia multimedial.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }, 
    thirdSection: {
      h3Title: "Controla tu Sala Multimedia con un Solo Toque",
      p: "Toma el control completo de tu sala multimedia con un sistema de control centralizado. Desde ajustar las luces y regular la temperatura, hasta controlar el audio y video, podrás manejar todos los aspectos de tu sala con un solo toque. Simplifica tu experiencia multimedia y disfruta de un manejo intuitivo y conveniente. Olvídate de los controles remotos múltiples y disfruta de una experiencia fluida con el control centralizado en tu sala multimedia. En Arquidomo, te ofrecemos soluciones de control personalizadas para que puedas disfrutar de tu sala multimedia de manera práctica y eficiente.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }
  }
  return (
    <PageLayout data={ data } />
  )
}

export default page