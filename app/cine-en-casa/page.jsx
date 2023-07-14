import { PageLayout } from "../pageLayout/PageLayout"

const page = () => {
    const data = {
        h1: "Cine en casa", 
        firstSection: {
          image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp",
          h2Title:"Sumérgete en la Experiencia Cinematográfica con un Proyector 4K/8K en tu Hogar",
          p:"Imagina tener la experiencia cinematográfica completa sin salir de tu casa. Con un proyector 4K/8K en tu hogar, disfrutarás de imágenes nítidas, colores vibrantes y detalles impresionantes. Sumérgete en tus películas y programas favoritos como nunca antes, con una calidad de imagen que te transportará al mundo del entretenimiento. Ya sea para disfrutar en familia o para organizar una noche de cine con amigos, tener un proyector 4K/8K en casa es la clave para vivir experiencias cinematográficas inolvidables. Eleva tu entretenimiento al siguiente nivel con Arquidomo."
        },
        secondSection: {
          h3Title: "Descubre la Claridad y Detalles Increíbles de los Proyectores 4K/8K",
          p: "Imagina tener la experiencia cinematográfica completa sin salir de tu casa. Con un proyector 4K/8K en tu hogar, disfrutarás de imágenes nítidas, colores vibrantes y detalles impresionantes. Sumérgete en tus películas y programas favoritos como nunca antes, con una calidad de imagen que te transportará al mundo del entretenimiento. Ya sea para disfrutar en familia o para organizar una noche de cine con amigos, tener un proyector 4K/8K en casa es la clave para vivir experiencias cinematográficas inolvidables. Eleva tu entretenimiento al siguiente nivel con Arquidomo.", 
          image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
        }, 
        thirdSection: {
          h3Title: "Sumérgete en el Realismo de los Televisores 4K/8K UHD",
          p: "Los televisores 4K/8K UHD ofrecen un nivel de realismo impresionante con una resolución y nitidez asombrosas. Cada detalle cobra vida en la pantalla, desde los colores vibrantes hasta los contrastes intensos. Con un televisor 4K/8K UHD, podrás disfrutar de una experiencia visual envolvente, sumergiéndote en tus contenidos favoritos como nunca antes. En Arquidomo, te ofrecemos una selección de televisores 4K/8K UHD de marcas reconocidas, para que puedas disfrutar de una calidad de imagen excepcional y vivir el entretenimiento de manera más inmersiva en la comodidad de tu hogar.", 
          image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
        }
      }

    return (
        <PageLayout data={ data } />
    )
}

export default page