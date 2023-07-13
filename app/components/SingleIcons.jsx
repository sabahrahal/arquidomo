export const SingleIcons = ({title, description, icon}) => {
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl mx-auto">
    <figure className='bg-gray-200'>
        { icon }
    </figure>
    <div className="card-body">
        <h2 className="card-title">{ title }</h2>
        <p>{ description }</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">ver más...</button>
        </div>
    </div>
</div>
  )
}
