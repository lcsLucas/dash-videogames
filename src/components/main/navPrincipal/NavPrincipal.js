import React from 'react'

function NavPrincipal() {
    return (
        <nav className="nav nav-principal">
            <li className="nav-item">
                <a title="Home" className="nav-link active" href="#home">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a title="Pins" className="nav-link" href="#pins">
                    Pins
                </a>
            </li>
            <li className="nav-item">
                <a title="Store" className="nav-link" href="#store">
                    Store
                </a>
            </li>
        </nav>
    )
}

export default NavPrincipal