import React from 'react';
import './App.css';

const Movies = ({ item: { Poster, Title, Type, Year, imdbID } }) => {
    return (
        <>
            <div className='movie-container'>
                <img src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"} />
                <p>Title: {Title}</p>
                <p>Type: {Type}</p>
                <p>Year: {Year}</p>
                <p>imdbID: {imdbID}</p>
            </div>
        </>
    );
}

export default Movies;
