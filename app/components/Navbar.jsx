import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.webp"

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container">
            <div className="w-full justify-between lg:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={"/"}>Inicio</Link></li>
                        <li>
                            <a>Residencial</a>
                            <ul className="p-2">
                                <li><Link href={"/cine-en-casa"}>Cine en casa</Link></li>
                                <li><Link href={"/audio-multizonas"}>Audio multizonas</Link></li>
                                <li><Link href={"/sala-multimedia"}>Sala multimedia</Link></li>
                                <li><Link href={"/wifi-y-redes"}>Wifi y redes</Link></li>
                                <li><Link href={"/control-de-iluminacion"}>Control de iluminación</Link></li>
                                <li><Link href={"/cortinas-automatizadas"}>Cortinas automatizadas</Link></li>
                            </ul>
                        </li>
                        <li><Link href={"/contacto"}>Contactanos</Link></li>
                    </ul>
                </div>
                <Link href={"/"}>
                    <Image src={ logo } width={100} height={100} alt="logo arquidomo"/>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Inicio</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Residencial</summary>
                            <ul className="p-2">
                                <li><Link href={"/cine-en-casa"}>Cine en casa</Link></li>
                                <li><Link href={"/audio-multizonas"}>Audio multizonas</Link></li>
                                <li><Link href={"/sala-multimedia"}>Sala multimedia</Link></li>
                                <li><Link href={"/wifi-y-redes"}>Wifi y redes</Link></li>
                                <li><Link href={"/control-de-iluminacion"}>Control de iluminación</Link></li>
                                <li><Link href={"/cortinas-automatizadas"}>Cortinas automatizadas</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href={"/contacto"}>Contactanos</Link></li>
                </ul>
            </div>
        </div>
    )
}
