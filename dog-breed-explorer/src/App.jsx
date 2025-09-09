import React, { useEffect, useState } from "react";
import axios from "axios";
import BreedCard from "./component/breedcard";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dogapi.dog/api/v2/breeds")
      .then(res => setBreeds(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-yellow-200 p-8">
      <h1 className="text-4xl font-extrabold text-center text-amber-900 drop-shadow-md mb-10">
        🐕 Dog Breed Explorer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {breeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}

export default App;
