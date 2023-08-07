"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.webp"
import { useState } from "react"

export const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="navbar bg-base-100 container">
            <div className="w-full justify-between lg:navbar-start">
                <div className='dropdown'>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => { setDropDown(!dropDown) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={`${!dropDown && 'hidden'} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
                        <li onClick={() => { setDropDown(false) }}><Link href={"/"}>Inicio</Link></li>
                        <li>
                            <a>Residencial</a>
                            <ul>
                                <li onClick={() => { setDropDown(false) }}><Link href={"/cine-en-casa"}>Cine en casa</Link></li>
                                <li onClick={() => { setDropDown(false) }}><Link href={"/audio-multizonas"}>Audio multizonas</Link></li>
                                <li onClick={() => { setDropDown(false) }}><Link href={"/sala-multimedia"}>Sala multimedia</Link></li>
                                <li onClick={() => { setDropDown(false) }}><Link href={"/wifi-y-redes"}>Wifi y redes</Link></li>
                                <li onClick={() => { setDropDown(false) }}><Link href={"/control-de-iluminacion"}>Control de iluminación</Link></li>
                                <li onClick={() => { setDropDown(false) }}><Link href={"/cortinas-automatizadas"}>Cortinas automatizadas</Link></li>
                            </ul>
                        </li>
                        <li onClick={() => { setDropDown(false) }}><Link href={"/contacto"}>Contactanos</Link></li>
                    </ul>
                </div>
                <Link href={"/"}>
                    <Image src={logo} width={100} height={100} alt="logo arquidomo" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Inicio</Link></li>
                    <li className="dropdown dropdown-bottom">
                        <label className="flex items-center" tabIndex="0" onClick={() => { setDropDown(!dropDown) }}>Residencial
                            {
                                !dropDown ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                            }

                        </label>
                        <ul tabIndex="0" className={`${!dropDown && 'hidden'} dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`}>
                            <li onClick={() => { setDropDown(false) }}><Link href={"/cine-en-casa"}>Cine en casa</Link></li>
                            <li onClick={() => { setDropDown(false) }}><Link href={"/audio-multizonas"}>Audio multizonas</Link></li>
                            <li onClick={() => { setDropDown(false) }}><Link href={"/sala-multimedia"}>Sala multimedia</Link></li>
                            <li onClick={() => { setDropDown(false) }}><Link href={"/wifi-y-redes"}>Wifi y redes</Link></li>
                            <li onClick={() => { setDropDown(false) }}><Link href={"/control-de-iluminacion"}>Control de iluminación</Link></li>
                            <li onClick={() => { setDropDown(false) }}><Link href={"/cortinas-automatizadas"}>Cortinas automatizadas</Link></li>
                        </ul>
                    </li>
                    <li><Link href={"/contacto"}>Contactanos</Link></li>
                </ul>
            </div>
        </div>
    )
}
