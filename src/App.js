import React, {useState, useEffect} from "react";

import MovieCard from "./moviecard";

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=eb114e12";

//copy object on the array in insepct, use this data for the static to know what jsx writing
/*const movie1={
    "Title": "Barbie in the 12 Dancing Princesses",
    "Year": "2006",
    "imdbID": "tt0859594",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzVkMzdiZTItZWFlYS00NmU1LWEwOTYtM2Y1ZGNhODhjOWI0XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
}*/

const App =() => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    //async=taketime to fetch data(async current data)
    //async will accept the (search by)

    const searchMovies = async ( title ) => {
        //call the api
        const response = await fetch (`${API_URL}&s=${title}`);
        const data= await response.json();

        //create data on the movie list
        setMovies(data.Search);
    }

    useEffect(() => {
        //call search movie
        searchMovies('Barbie');
    },[]);

    return(
        <div className="app">
            <h1>MoviesLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm} //static string
                onChange={(e) => setSearchTerm(e.target.value)} //accept other input for value
                />
            <img 
             src={searchIcon}
             alt="search"
             onClick={() =>{}}/>
            </div>

            

            {movies?.length > 0 ? (  
                <div className="container"> 
                  {movies.map((movie) => (
                    <MovieCard movie={movie} /> //render componnet with pass props
                  ))}
                </div>
             ) : ( //empty movie array
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
             )}

        </div>
    );
}

export default App;