import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import DataCard from "./Components/DataCard";
import Footer from "./Components/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  async function fetchNews() {
    setIsLoading(true); // Show loading spinner
    const response = await fetch("https://swapi.dev/api/films");

    const films = await response.json();
    const transfomedmovie = films.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        director: movie.director,
        release_date: movie.release_date,
        artist: movie.opening_crawl,
      };
    });
    setData(transfomedmovie);
    setIsLoading(false); // Hide loading spinner
  }

  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto my-10">
        <div className="flex justify-center">
          <button
            onClick={fetchNews} // Trigger fetch when clicked
            className="px-4 py-2 rounded-md bg-gray-100 font-semibold"
          >
            Fetch Data
          </button>
        </div>
        <div className="py-6 w-full mt-10 space-y-5 rounded-md">
          {/* Render Data Cards */}
          {!isloading &&
            data.length > 0 &&
            data.map((item, index) => (
              <DataCard item={item} key={index} /> // Display each item in a DataCard
            ))}
          {isloading && <p className="text-center">Loading ...</p>}
          {!isloading && data.length === 0 && (
            <p className="text-center">Not found Movie yet .</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
