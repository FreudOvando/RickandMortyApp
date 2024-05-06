

const Locationinfo = ({location}) => {

  return (

    <div>



<article className="min-w-[360px] w-auto h-auto bg-slate-500 rounded-lg flex justify-center gap-2 items-center flex-col flex-wrap shadow-md shadow-green-500">
    <h2 className="text-justify text-3xl font-mono font-bold m-1 text-green-600"> Location: </h2>
    <h3 className="text-justify text-2xl font-mono font-bold m-1">{location?.name} </h3>
    <ul className="flex flex-row justify-center items-center font-serif gap-8 flex-wrap m-4">
        <li className="flex flex-col justify-center items-center">
            <span className="text-2xl mb-2 font-mono mt-2 text-green-600" >Type:</span>
            <span className="text-2xl mb-2 font-mono mt-2" > {location?.type}  </span>
            </li>
            <li className="flex flex-col justify-center items-center">
            <span className="text-2xl mb-2 font-mono mt-2 text-green-600" >Dimension:</span>
            <span className="text-2xl mb-2 font-mono mt-2" > {location?.dimension}</span>
            </li>
            <li className="flex flex-col justify-center items-center">
            <span className="text-2xl mb-2 font-mono mt-2 text-green-600" >Population:</span>
            <span className="text-2xl mb-2 font-mono mt-2" >{location?.residents.length}</span>
            </li>
    </ul>
</article>
    </div>
  )
}

export default Locationinfo