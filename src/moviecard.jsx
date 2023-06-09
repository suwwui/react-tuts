//component
import React from 'react';

//object destructuring on props
const MovieCard=({movie: {imdbID, Year, Poster, Title, Type} }) => {
    return (
    <div className="movie" key ={imdbID}>
        <div>
            <p>{Year}</p>
        </div>

        <div>
            <img src={Poster !== 'N/A' ? Poster:'https://via.placeholder.com/4000'} alt={Title}/>
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
    </div>

    );
}

export default MovieCard;