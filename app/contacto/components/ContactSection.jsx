import { ContactForm } from "."


export const ContactSection = () => {
    return (
        <section className="container bg-slate-200 my-[100px] lg:w-1/2 rounded">
            <h2 className="text-center pt-5 mb-2">¡Contáctanos y transforma tu Hogar!</h2>
            <p className="text-justify px-2 md:text-center md:px-0 md:max-w-xl mx-auto">En Arquidomo, nuestro equipo de expertos está listo para responder tus preguntas y brindarte la asesoría necesaria para llevar tu hogar hacia la automatización. ¡No esperes más! Contáctanos hoy mismo y disfruta de los beneficios de un hogar inteligente.</p>
            <div className="lg:flex justify-center items-center py-10 md:px-6 px-0">
                <ContactForm />
            </div>
        </section>
    )
}
