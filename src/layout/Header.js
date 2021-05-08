import React from 'react'

const Header = () => {
    return (
        <nav className='purple'>
            <div className="nav-wrapper">
                <a href='/' className="brand-logo">REACT MOVIES</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/the-lensky/movies" rel="noreferrer" target="_blank">Repo</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Header
