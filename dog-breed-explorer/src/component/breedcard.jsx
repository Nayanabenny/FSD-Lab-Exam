import React from "react";

function BreedCard({ breed }) {
  const {
    name,
    description,
    life,
    male_weight,
    female_weight,
    hypoallergenic,
  } = breed.attributes;

  return (
    <div className="relative bg-amber-200 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition">
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 
                  bg-amber-700 text-white flex items-center justify-center 
                  rounded-full shadow-md font-bold">
    🐾
  </div>
  
  <h2 className="text-xl font-bold text-center mt-8 text-amber-900">{name}</h2>
  <p className="text-sm text-amber-950/80 mt-2 text-center line-clamp-3">
    {description || "No description available."}
  </p>

  <div className="mt-4 text-sm text-amber-900 space-y-1">
    <p><strong>Lifespan:</strong> {life?.min} – {life?.max} yrs</p>
    <p><strong>Male Weight:</strong> {male_weight?.min} – {male_weight?.max} kg</p>
    <p><strong>Female Weight:</strong> {female_weight?.min} – {female_weight?.max} kg</p>
  </div>
</div>


  );
}

export default BreedCard;
