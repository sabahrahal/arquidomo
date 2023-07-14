import { Footer, Navbar } from './components'
import './globals.css'
import { Exo_2 } from 'next/font/google'

const exo = Exo_2({
  weight: ["300","400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-exo", 
  display: "swap",
});

export const metadata = () => {
  return {
    title: {
      default: "Arquidomo - Automatización de Hogares | Cine en Casa, Audio Multizonas, Control de Iluminación y más",
    },
    description:
      "Descubre cómo transformar tu hogar en un espacio inteligente con los servicios de automatización de Arquidomo. Cine en casa, audio multizonas, control de iluminación y más.",
    icons: {
      icon: "./favicon.ico",
    },
    generator: "Next.js",
    applicationName: "Arquidomo",
    referrer: "origin-when-cross-origin",
    keywords: ["automatización de hogares", "cine en casa", "audio multizonas", "control de iluminación", "Cortinas automatizadas", "sala multimedia","wifi y redes", "Arquidomo" ],
    authors: [
      { name: "Sabah Rahal", url: "https://github.com/sabahrahal" },
      { name: "Jorge Oviedo", url: "https://github.com/jorgeoviedo3" }
    ],
    colorScheme: "light",
    creator: "Sabah Rahal",
    publisher: "Jorge Oviedo",
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${exo.variable} font-sans`}>
      <Navbar />
          {children}
      <Footer />    
      </body>
    </html>
  )
}
