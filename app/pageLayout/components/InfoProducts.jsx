import Image from "next/image"

export const InfoProducts = ({ firstSection, secondSection, thirdSection }) => {

  return (
    <>
      <section className="my-[100px] lg:px-0 px-2">
        <Image className="aspect-video object-cover rounded mb-2 mx-auto" src={firstSection.image} width={896} height={504} alt="Cine en casa Arquidomo" />
        <h2 className="max-w-[896px] mx-auto mb-2 text-primary">{ firstSection.h2Title }</h2>
        <p className="text-justify max-w-[896px] mx-auto">{ firstSection.p }</p>
      </section>

      <section className="my-[100px] bg-slate-200 lg:p-10 p-2">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-x-10 gap-y-4">
          <div className="lg:w-1/2">
            <h3 className="lg:max-w-2xl mb-2">{secondSection.h3Title}</h3>
            <p className="lg:max-w-2xl text-justify">{secondSection.p}</p>
          </div>

            <Image className="aspect-video object-cover rounded mb-2 mx-auto" src={secondSection.image} width={896} height={504} alt="Cine en casa Arquidomo" />

        </div>
      </section>

      <section className="my-[100px] lg:p-10 p-2 gap-y-4">
        <div className="container flex flex-col-reverse lg:flex-row-reverse items-center gap-x-10 gap-y-4">
          <div className="lg:w-1/2">
            <h3 className="lg:max-w-2xl mb-2">{thirdSection.h3Title}</h3>
            <p className="lg:max-w-2xl text-justify">{thirdSection.p}</p>
          </div>

            <Image className="aspect-video object-cover rounded mb-2 mx-auto" src={thirdSection.image} width={896} height={504} alt="Cine en casa Arquidomo" />

        </div>
      </section>
    </>
  )
}
