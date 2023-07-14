import { PageLayout } from "../pageLayout/PageLayout"

export const metadata = () => {
  return {
    title: "Control de Iluminación | Arquidomo - Automatización de Hogares",
    description:
      "Personaliza la iluminación de tu hogar con el control de iluminación de Arquidomo. Ajusta la intensidad, crea ambientes y ahorra energía de manera inteligente.",
    keywords: ["control de iluminación", "cortinas automatizadas", "ambiente personalizado","ahorro de energía","Arquidomo" ],
  };
};

const page = () => {
  const data = {
    h1: "Control de iluminación", 
    firstSection: {
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp",
      h2Title: "Controla la Iluminación de tu Hogar en cada Rincón con un Sistema de Control de Iluminación",
      p:"Imagina tener el control total de la iluminación en cada habitación de tu casa. Con un sistema de control de iluminación, podrás ajustar la intensidad de la luz, crear escenas personalizadas y programar horarios automáticos para adaptarse a tus necesidades y preferencias. Disfruta de un ambiente acogedor y funcional en cada espacio, a través de un control conveniente y sencillo. No importa si estás relajándote en el salón, cocinando en la cocina o trabajando en el estudio, el control de iluminación en toda tu casa te brinda la libertad de crear el ambiente perfecto en cada momento. Descubre la utilidad de tener un control de iluminación en toda tu casa con Arquidomo."
    },
    secondSection: {
      h3Title: "Keypads Configurables para un Control Personalizado",
      p: "Los keypads configurables son la clave para un control personalizado y conveniente de la iluminación en tu hogar. Estos dispositivos te permiten ajustar las luces, crear escenas y acceder a funciones especiales con solo tocar un botón. Personaliza tus keypads de acuerdo a tus necesidades y preferencias, asignando diferentes configuraciones a cada botón. Simplifica tu experiencia de control de iluminación con keypads configurables que se adaptan a tu estilo de vida. En Arquidomo, te ofrecemos una variedad de keypads configurables para brindarte un control personalizado y fácil de usar.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }, 
    thirdSection: {
      h3Title: "Bombillos Inteligentes para una Iluminación Versátil",
      p: "Los bombillos inteligentes te permiten ajustar la iluminación de forma versátil y conveniente. Controla la intensidad, el color y la temperatura de la luz desde tu dispositivo móvil o a través de comandos de voz. Crea ambientes personalizados, programando horarios automáticos y sincronizando la iluminación con otros dispositivos inteligentes. Disfruta de una iluminación versátil y adaptativa en cada espacio de tu hogar con bombillos inteligentes. En Arquidomo, te ofrecemos una selección de bombillos inteligentes de marcas reconocidas, para que puedas disfrutar de una iluminación personalizada y eficiente en tu hogar.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }
  }
  return (
    <PageLayout data={ data } />
  )
}

export default page