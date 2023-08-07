export const Hero = () => {
    return (
        <>
            <section className="relative bg-[url(https://res.cloudinary.com/dojunfcmb/image/upload/v1691391459/hero-optimize_uadpbh.webp)] bg-cover bg-center bg-no-repeat z-[-1]">
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                            Arquidomo
                            <strong className="block font-extrabold text-main text-4xl">
                                ¡Automatización de hogares!
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-2xl text-justify text-white sm:text-xl/relaxed">
                            Bienvenido a Arquidomo, tu solución de automatización de hogares de confianza. Ofrecemos una amplia gama de servicios, incluyendo cine en casa, audio multizonas, sala multimedia, wifi/redes, control de iluminación y cortinas automatizadas. Nuestro enfoque se basa en trabajar con marcas líderes en la industria, como Savant, Sonance y Lutron, para brindarte la mejor experiencia en tu hogar automatizado.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                            <a href="#info_section" className="btn btn-primary">¡Empieza ahora!</a>
                            <a href="#info_section" className="btn btn-primary">¡Empieza ahora!</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
