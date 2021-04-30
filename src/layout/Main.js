import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=mortal-kombat`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
            .then(() => setLoading(false))
    }, [])

    const searchMovies = (str, filter = 'all') => {
        setLoading(true)
        setMovies([])
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${filter !== 'all' ? `&type=${filter}` : ''}`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
            .then(setLoading(false))
    }

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies}/>
            {
                loading ? <Preloader/> : <Movies movies={movies}/>
            }
        </main>
    )
}

export default Main
 