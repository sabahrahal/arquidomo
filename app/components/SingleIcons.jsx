import Image from "next/image"
import Link from "next/link"

export const SingleIcons = ({title, description, image, alt, linkRef}) => {
  return (
    <div key={title} className="card md:w-96 bg-base-100 shadow-xl mx-auto">
    <figure>
        <Image className="aspect-[16/9] object-cover object-center w-full" src={ image } width={300} height={300} alt={ alt }/>
    </figure>
    <div className="card-body">
        <h2 className="card-title">{ title }</h2>
        <p>{ description }</p>
        <div className="card-actions justify-end">
            <Link href={ linkRef } className="btn btn-primary">Ver más...</Link>
        </div>
    </div>
</div>
  )
}
