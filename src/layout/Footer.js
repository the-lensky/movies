import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer purple lighten-1">
            <div className="footer-copyright purple lighten-1">
                <div className="container">
                    © { new Date().getFullYear()} Have a nice day!😼
                    <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
