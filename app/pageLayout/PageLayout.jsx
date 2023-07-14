import { ContactSection } from "../contacto/components"
import { HeroPage, InfoProducts } from "./components"

export const PageLayout = ({data}) => {
  return (
    <div>
        <HeroPage title={data.h1}/>
        <InfoProducts { ...data }/>
        <ContactSection />
    </div>
  )
}
