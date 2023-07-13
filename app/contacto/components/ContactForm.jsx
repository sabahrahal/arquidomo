export const ContactForm = () => {
    return (
        <form className="px-2 md:px-0 lg:w-[700px]">
            <div className="flex flex-col md:gap-x-2 lg:justify-between lg:flex-row mb-2">
                <div className="form-control w-full lg:max-w-xs">
                    <label className="label" htmlFor="name">
                        <span className="label-text ">Nombre</span>
                    </label>
                    <input id="name" type="text" required placeholder="John" className="input input-bordered w-full lg:max-w-xs" />
                </div>

                <div className="form-control md:gap-x-2 w-full lg:max-w-xs">
                    <label className="label" htmlFor="fullName">
                        <span className="label-text ">Apellidos</span>
                    </label>
                    <input id="fullName" type="text" required placeholder="Doe" className="input input-bordered w-full lg:max-w-xs" />
                </div>
            </div>

            <div className="flex flex-col md:gap-x-2 lg:justify-between lg:flex-row mb-2">
                <div className="form-control w-full lg:max-w-xs">
                    <label className="label" htmlFor="email">
                        <span className="label-text ">Correo Electronico</span>
                    </label>
                    <input id="email" type="email" required placeholder="jonhdoe@mail.com" className="input input-bordered w-full lg:max-w-xs" />
                </div>

                <div className="form-control w-full lg:max-w-xs">
                    <label className="label" htmlFor="phone">
                        <span className="label-text ">Número de teléfono</span>
                    </label>
                    <input id="phone" type="phone" required placeholder="84596854" className="input input-bordered w-full lg:max-w-xs" />
                </div>
            </div>

            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text ">Información del proyecto</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Escribe sobre tu proyecto..."></textarea>
            </div>
        </form>
    )
}
