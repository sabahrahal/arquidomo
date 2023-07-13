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

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

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
