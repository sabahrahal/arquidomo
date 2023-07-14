import { PageLayout } from "../pageLayout/PageLayout"

const page = () => {
  const data = {
    h1: "Audio multizonas", 
    firstSection: {
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp",
      h2Title: "Disfruta de la música en cada rincón de tu hogar con un sistema de audio multizonas",
      p:"Imagina tener la música que amas siguiéndote en cada paso de tu hogar. Con un sistema de audio multizonas, podrás disfrutar de una experiencia musical envolvente en cada habitación. Escucha tus canciones favoritas mientras te relajas en el dormitorio, cocina o patio, o sincroniza la música en toda la casa para crear un ambiente festivo en reuniones y eventos. Con un sistema de audio multizonas, podrás disfrutar de la flexibilidad y libertad de tener música en todos los espacios de tu hogar, brindando un ambiente acogedor y personalizado en cada rincón. Descubre el placer de la música en toda tu casa con Arquidomo."
    },
    secondSection: {
      h3Title: "Sumérgete en un Sonido de Calidad con las Bocinas de Pared",
      p: "Las bocinas de pared ofrecen una solución discreta y estilizada para llenar tus espacios con un sonido de calidad. Diseñadas para integrarse perfectamente en la decoración de tu hogar, estas bocinas proporcionan un audio claro y envolvente sin ocupar espacio adicional. Disfruta de la música, películas y juegos con un sonido de alta fidelidad que se mezcla armoniosamente con tu entorno. En Arquidomo, te ofrecemos una selección de bocinas de pared de marcas líderes, para que puedas disfrutar de un sonido excepcional sin sacrificar la estética de tu hogar.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }, 
    thirdSection: {
      h3Title: "Vive una Experiencia Auditiva Inmersiva con las Bocinas de Tech",
      p: "Las bocinas de techo proporcionan una experiencia auditiva envolvente sin ocupar espacio en tu habitación. Disfruta de un sonido equilibrado y envolvente que llena cada rincón de tu hogar, creando un ambiente acogedor y vibrante. Estas bocinas se integran perfectamente en el techo, ofreciendo un aspecto limpio y estético. Ya sea que estés disfrutando de música, viendo películas o jugando videojuegos, las bocinas de techo te sumergen en un mundo de sonido de alta calidad. En Arquidomo, te ofrecemos una selección de bocinas de techo de marcas reconocidas, para que puedas vivir una experiencia auditiva inmersiva en tu hogar.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }
  }
  return (
    <PageLayout data={ data } />
  )
}

export default page
