import React, {useEffect, useState} from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=7678bfd1&s=mortal-kombat')
            .then(response => response.json())
            .then(data => setMovies(data.Search))
            console.log(movies, '!!!!!!!!!!!')
    }, [])

    return (
        <main className='container content'>
            {
                movies.length ? <Movies movies={movies}/> : <Preloader />
            }
        </main>
    )
}

export default Main
 