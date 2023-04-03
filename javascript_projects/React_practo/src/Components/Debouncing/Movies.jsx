import React, { useEffect, useState } from "react";

function Movies() {
    const [state, setState] = useState([]);
    const [timeoutId, setTimeoutID] = useState(null);

    const handleInput = (event) => {
        const title = event.target.value;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeoutID(
            setTimeout(() => {
                fetchMovies(title);
            }, 500)
        );
    };

    const fetchMovies = async (title) => {
        const apiKey = "ec8760b6";
        const response = await fetch(
            `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        setState([data]);
        // count++;
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    return (
        <div>
            <h1>Movies List</h1>

            <input type="text" placeholder="Movies" onChange={handleInput} />

            {state.map((e) => (
                <ul key={e.id}>
                    <img src={e.Poster} alt="moves" />
                    <h1 key={e.imdbID}>{e.Title}</h1>
                    <h3>{e.Actors}</h3>
                    <h3>Year : {e.Year}</h3>
                    <li>Released : {e.Released}</li>
                    <li>Time : {e.Runtime}</li>
                    <li>Genre : {e.Genre}</li>
                    <li>Director : {e.Director}</li>
                </ul>
            ))}
        </div>
    );
}

export default Movies;
