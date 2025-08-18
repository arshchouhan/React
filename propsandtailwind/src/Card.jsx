import React from 'react'

function Card(props) {

    console.log(props)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg"
        alt="Lizard"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{props.name}</h2>
        <p className="text-gray-600 text-sm">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </p>
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Share
        </button>
        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Learn More
        </button>
      </div>
    </div>
  );
}


export default Card