export const Hero = () => {
    return (
        <section className="hero min-h-screen" style={{ backgroundImage: 'url(https://res.cloudinary.com/dojunfcmb/image/upload/v1689133317/Aquidomo/young-woman-using-home-technology-min_enjo36.webp)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="max-w-md mb-5 text-4xl lg:text-6xl font-bold mx-auto">Automatización de hogares con <span className="uppercase font-bold text-5xl lg:text-7xl">Arquidomo</span></h1>
                    <p className="mb-5 text-justify md:max-w-xl">Bienvenido a Arquidomo, tu solución de automatización de hogares de confianza. Ofrecemos una amplia gama de servicios, incluyendo cine en casa, audio multizonas, sala multimedia, wifi/redes, control de iluminación y cortinas automatizadas. Nuestro enfoque se basa en trabajar con marcas líderes en la industria, como Savant, Sonance y Lutron, para brindarte la mejor experiencia en tu hogar automatizado.</p>
                    <a href="#info_section" className="btn btn-primary">¡Empieza ahora!</a>
                </div>
            </div>
        </section>
    )
}
