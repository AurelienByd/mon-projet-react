import React, { useState } from "react"

export default function Api() {
    const [text, setText] = useState('')
    const [movies, setMovies] = useState([])

    const fetchMoviesData = () => {
        fetch("http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query="+text)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                setMovies(data.results)
            })
    }

    return (
        <>
            <input
                type='text'
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button
                onClick={fetchMoviesData}
            >Ajouter</button>
            {movies.map(movie => (
                <li>{movie.title} ({movie.release_date})</li>
            ))}
        </>
    )
}