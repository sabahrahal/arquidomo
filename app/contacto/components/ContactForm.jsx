'use client'

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const form = useRef();
    const [successForm, setSuccessForm] = useState(false); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xoeppuf', 'template_6ggy0eq', form.current, 'c_RCn90RUuAW2Z8sJ')
            .then((result) => {
                form.current.reset();
                setSuccessForm(true);
            }, (error) => {
                throw new Error(error);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="px-2 md:px-0 lg:w-[700px]">
            <div className={successForm ? 'alert text-white bg-primary' : 'hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Formulario enviado correctamente, pronto lo contactaremos.</span>
            </div>
            <div className="flex flex-col md:gap-x-2 lg:justify-between lg:flex-row mb-2">
                <div className="form-control w-full lg:max-w-xs">
                    <label className="label" htmlFor="name">
                        <span className="label-text ">Nombre</span>
                    </label>
                    <input id="name" name="user_name" type="text" required placeholder="John" className="input input-bordered w-full lg:max-w-xs" />
                </div>

                <div className="form-control md:gap-x-2 w-full lg:max-w-xs">
                    <label className="label" htmlFor="fullName">
                        <span className="label-text ">Apellidos</span>
                    </label>
                    <input id="fullName" name="user_fullname" type="text" required placeholder="Doe" className="input input-bordered w-full lg:max-w-xs" />
                </div>
            </div>

            <div className="flex flex-col md:gap-x-2 lg:justify-between lg:flex-row mb-2">
                <div className="form-control w-full lg:max-w-xs">
                    <label className="label" htmlFor="email">
                        <span className="label-text ">Correo Electronico</span>
                    </label>
                    <input id="email" name="user_email" type="email" required placeholder="jonhdoe@mail.com" className="input input-bordered w-full lg:max-w-xs" />
                </div>

                <div className="form-control w-full lg:max-w-xs">
                    <label className="label" htmlFor="phone">
                        <span className="label-text ">Número de teléfono</span>
                    </label>
                    <input id="phone" name="user_phone" type="phone" required placeholder="84596854" className="input input-bordered w-full lg:max-w-xs" />
                </div>
            </div>

            <div className="form-control mb-4">
                <label className="label">
                    <span className="label-text ">Información del proyecto</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" name="user_message" placeholder="Escribe sobre tu proyecto..."></textarea>
            </div>

            <div className="form-control mb-4">
                <button className="btn btn-primary" type="submit" value="Send" >Enviar</button>
            </div>
        </form>
    )
}
