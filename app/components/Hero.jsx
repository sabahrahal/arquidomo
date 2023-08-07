import Link from "next/link"

export const Hero = () => {
    return (
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://res.cloudinary.com/dojunfcmb/image/upload/v1691391459/hero-optimize_uadpbh.webp)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <div className="flex justify-center">
                            <h1 className="max-w-lg lg:max-w-4xl text-5xl font-extrabold sm:text-5xl text-white mb-2 lg:text-8xl">
                                Arquidomo
                                <span className="block font-extrabold text-main text-3xl lg:text-6xl max-w-none">
                                    ¡Automatización de hogares!
                                </span>
                            </h1>
                        </div>
                        <p className="max-w-lg lg:max-w-xl mb-5 text-justify mx-auto">Bienvenido a Arquidomo, tu solución de automatización de hogares de confianza. Ofrecemos una amplia gama de servicios, incluyendo cine en casa, audio multizonas, sala multimedia, wifi/redes, control de iluminación y cortinas automatizadas. Nuestro enfoque se basa en trabajar con marcas líderes en la industria, como Savant, Sonance y Lutron, para brindarte la mejor experiencia en tu hogar automatizado.</p>
                        <Link href="#info_section" className="btn btn-primary">Conoce más...</Link>
                    </div>
                </div>
            </div>
    )
}
