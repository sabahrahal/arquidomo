import { PageLayout } from "../pageLayout/PageLayout"

export const metadata = () => {
  return {
    title: "WiFi y Redes | Arquidomo - Automatización de Hogares",
    description:
      "Optimiza tu conexión con los servicios de WiFi y redes de Arquidomo. Mantén una cobertura confiable y un rendimiento óptimo en todos tus dispositivos.",
    keywords: ["WiFi", "redes", "conexión estable","optimización de red","Arquidomo" ],
  };
};

const page = () => {
  const data = {
    h1: "Wifi y redes", 
    firstSection: {
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1691390152/082b8fa6-6222-4333-8a86-ee9e259af0f4_dl6ukz.webp",
      h2Title: "Mantén tu hogar conectado en todo momento con una red de internet en toda tu casa",
      p:"La conectividad en todo tu hogar es esencial en la era digital en la que vivimos. Con una red de internet en toda tu casa, podrás disfrutar de una conexión estable y rápida en cada habitación. Trabaja desde cualquier lugar, disfruta de transmisiones en línea sin interrupciones, juega videojuegos en línea sin latencia y conecta todos tus dispositivos inteligentes de manera fluida. No importa dónde te encuentres en tu hogar, una red de internet confiable te brinda la libertad de estar siempre conectado y aprovechar al máximo la tecnología. Descubre la utilidad de tener una internet en toda tu casa con Arquidomo."
    },
    secondSection: {
      h3Title: "Sistemas WiFi cableados para una conectividad confiable",
      p: "Los sistemas WiFi cableados ofrecen una conectividad confiable y estable en tu hogar. Con cables Ethernet estratégicamente instalados, podrás garantizar una conexión sólida y de alta velocidad en cada habitación. Disfruta de una transmisión de datos fluida, juegos en línea sin interrupciones y una conectividad sin problemas para todos tus dispositivos. En Arquidomo, te ofrecemos soluciones de sistemas WiFi cableados personalizados, para brindarte una conectividad confiable en todo momento.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689354488/Aquidomo/how-to-log-into-router_gorxnz.webp"
    }, 
    thirdSection: {
      h3Title: "Sistemas WiFi mesh para una cobertura total",
      p: "Los sistemas WiFi Mesh proporcionan una cobertura total en tu hogar, eliminando los puntos muertos y asegurando una conexión estable en cada rincón. Con nodos colocados estratégicamente, estos sistemas crean una red unificada que se adapta a tu hogar, brindando una experiencia de internet sin interrupciones. Disfruta de una conectividad confiable, transmisiones en línea sin problemas y una señal fuerte en todas las áreas de tu hogar. En Arquidomo, te ofrecemos soluciones de sistemas WiFi Mesh para garantizar una cobertura total y una conexión confiable en toda tu casa.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689354489/Aquidomo/covr1103a1image-lfront_reprqq.webp"
    }
  }
  return (
    <PageLayout data={ data } />
  )
}

export default page