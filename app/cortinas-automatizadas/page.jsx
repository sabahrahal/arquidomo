import { PageLayout } from "../pageLayout/PageLayout"

const page = () => {
  const data = {
    h1: "Cortinas Automatizadas", 
    firstSection: {
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp",
      h2Title: "Simplifica tu Vida y Transforma tus Espacios con Cortinas Automatizadas en toda tu Casa",
      p:"Imagina tener el control total de tus cortinas con solo presionar un botón. Con cortinas automatizadas en toda tu casa, podrás regular la entrada de luz, crear ambientes íntimos y mejorar la privacidad de tus espacios, todo de manera conveniente y sencilla. Abre y cierra tus cortinas según tus preferencias, programa horarios automáticos y sincroniza su funcionamiento con otros sistemas de automatización en tu hogar. Además de brindarte comodidad, las cortinas automatizadas también añaden un toque de elegancia y sofisticación a tus espacios. Descubre la utilidad de tener cortinas automatizadas en toda tu casa con Arquidomo."
    },
    secondSection: {
      h3Title: "Materiales de Calidad de Primera para Cortinas Duraderas",
      p: "En Arquidomo, nos aseguramos de utilizar materiales de calidad de primera para nuestras cortinas automatizadas. Trabajamos con tejidos duraderos, resistentes a la decoloración y a la deformación, para garantizar que tus cortinas se mantengan en excelentes condiciones a lo largo del tiempo. Nuestros materiales también ofrecen una amplia variedad de opciones de diseño, permitiéndote encontrar el estilo que se adapte a tus gustos y la estética de tu hogar. Confía en nuestra selección de materiales de calidad para obtener cortinas automatizadas que sean tanto funcionales como hermosas.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }, 
    thirdSection: {
      h3Title: "Tipos de Materiales para Cortinas Automatizadas que se Adaptan a tus Necesidades",
      p: "En Arquidomo, ofrecemos una amplia gama de materiales para cortinas automatizadas, adaptados a tus necesidades y preferencias. Desde telas translúcidas que suavizan la luz y brindan privacidad, hasta tejidos opacos que bloquean completamente la entrada de luz, tenemos opciones para cada situación. Además, puedes elegir entre diferentes colores, texturas y patrones para personalizar tus cortinas según el estilo de tu hogar. Explora nuestra selección de materiales y encuentra las cortinas automatizadas perfectas para crear el ambiente ideal en tus espacios.", 
      image: "https://res.cloudinary.com/dojunfcmb/image/upload/v1689238704/Aquidomo/cine_en_casa_rn0n8r.webp"
    }
  }
  return (
    <PageLayout data={ data } />
  )
}

export default page