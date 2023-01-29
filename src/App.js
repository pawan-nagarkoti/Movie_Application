import React, { useEffect, useState } from 'react';
import './App.css';
import Movies from './movies';

const API_URL = "http://www.omdbapi.com?apikey=87773d75";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [boxValue, setBoxValue] = useState("");

  useEffect(() => {
    searchMovie('Batman');
  }, []);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  const searchData = () => {
    searchMovie(boxValue);
  }
  return (
    <>
      <div className='movieWraper'>
        <div className='heading-with-searchbox'>
          <h3>Your Favourite Movies/Series List</h3>

          <div className='search-box-with-button'>
            <input type='text' onChange={(e) => setBoxValue(e.target.value)} />
            <button onClick={searchData}>search</button>
          </div>

        </div>
        {
          movies.length > 0 ?
            (<div className="movies-wraper">
              {
                movies.map((item) => {
                  return (
                    <Movies item={item} />
                  );
                })
              }
            </div>)
            : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
        }
      </div>
    </>
  );
}

export default App;