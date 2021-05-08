import React, { useState } from 'react'

const Search = ({searchMovies}) => {

    const [search, setSearch] = useState('mortal kombat')
    const [filter, setFilter] = useState('all')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, filter)
        }
    }

    const handleFilter = (e) => {
        setFilter(e.target.dataset.type)
        searchMovies(search, e.target.dataset.type)
    }

    return (
        <div className="row ">
            <div className="col s12 ">
                <div className="input-field ">
                    <input
                        placeholder='search'
                        type="search"
                        className="validate"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button
                        className="btn btn-search purple lighten-1"
                        onClick={() => searchMovies(search, filter)}
                    >
                        Search
                    </button>

                </div>
                <div>
                    <label>
                        <input
                            className="with-gap purple"
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={handleFilter}
                            checked={filter === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={handleFilter}
                            checked={filter === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={handleFilter}
                            checked={filter === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Search
