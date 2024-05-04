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

  const bg = {
    backgroudImage: 'url(./assets/fondo1.jpeg)'
  }

  return (
    <div style={bg} className="bg-stone-900 flex justify-center flex-col items-center h-auto w-auto min-w-[350px] ">
      <div className="flex justify-center items-center mb-0  m-2 p-2 flex-col w-auto h-auto">
        <h1 className="flex-wrap text-wrap text-justify font-mono font-bold text-xl text-green-500">
          Rick and Morty Location App:
        </h1>
        <h2 className="flex-wrap text-wrap text-justify font-mono font-bold text-xl mt-2 mb-2 text-green-500">
          Find your character by location
        </h2>
        <form
          onSubmit={handledSubmit}
          className=" flex justify-center items-center flex-row m-2 p-2 "
        >
          <input
          id="input"
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
        <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
    <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
            <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                <span class="sr-only">Error</span>
            </h2>
            <p class="text-2xl md:text-3xl dark:text-gray-300">Please, you must provide a number between 1 or 126.</p>
            <a href="#" class="px-8 py-4 text-xl font-semibold rounded bg-green-600 text-gray-50 hover:text-gray-200">Try another number</a>
        </div>
    </div>
</section>
        
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
