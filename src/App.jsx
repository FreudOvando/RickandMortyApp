import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./service/getRandomNumber";
import Locationinfo from "./component/Locationinfo";
import ResidentCard from "./component/ResidentCard";



function App() {

  const [locationId, setLocationId] = useState(getRandomNumber(126));
  

  const url = `https://rickandmortyapi.com/api/location/${locationId}`;

  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [locationId]);

  const inputId = useRef();

  const handledSubmit = (e) => {
    e.preventDefault();
    setLocationId(inputId.current.value.trim());
  };

  return (
    <div className="bg-stone-900 flex justify-center flex-col items-center h-auto w-auto min-w-[350px] ">
      <div className="flex justify-center items-center mb-0  m-2 p-2 flex-col w-auto h-auto sm:text-justify text-wrap">
        <h1 className="text-wrap text-justify font-mono font-bold text-3xl mt-2 mb-2 text-green-500 indent-1 tracking-tighter">
          Rick and Morty Location App:
        </h1>
        <h2 className="text-wrap text-justify font-mono font-bold text-3xl mt-2 mb-2 text-green-500 indent-1 tracking-tighter">
          Find your character by location
        </h2>
        <form
          onSubmit={handledSubmit}
          className=" flex justify-center items-center flex-row m-2 p-2 "
        >
          <input
            placeholder={locationId}
            ref={inputId}
            type="number"
            className="  bg-slate-700 text-green-500 w-[200px] h-[60px] text-wrap font-mono text-3xl text-center rounded-lg shadow-inner shadow-green-800"
          />
          <button className="w-[100px] h-[60px] rounded-sm bg-green-400 ml-1 hover:bg-green-600 text-xl ">
            🏸Search
          </button>
        </form>
      </div>

      {
      hasError ? (
        <h2> ✖ provide a correct id could be 1 or 126</h2>
      ) : (
        <>
          <section className="flex justify-center items-center m-2 p-2 w-auto h-auto">
            <Locationinfo location={location} />
          </section>

          <div className="w-auto h-auto flex flex-col justify-center items-center">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url}  />
            ))}
          </div>
        </>
      )}
    
    </div>
  );
}

export default App;
