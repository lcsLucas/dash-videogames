import React, { useState, useEffect } from 'react'

function ConstroiMenu(props) {
    return (
        <ul className="navbar-nav">
            {props.children}
        </ul>
    )
}

function MenuLogout() {

    return (
        <ConstroiMenu>
            <li className="nav-item">
                <a href="" className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fa-fw"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fa-fw"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link">
                    <span>
                        Sign in
                    </span>
                </a>
            </li>
        </ConstroiMenu>
    )
}

function NavPerfil({ perfil }) {

    return (
        <ConstroiMenu>
            <li className="nav-item">
                <a href="" className="nav-link avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fa-fw"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                </a>
            </li>
            {
                perfil.length &&
                perfil.map((item, index) => {
                    if (index < 5)
                        return (
                            <li key={item.avatars[0].url} className="nav-item">
                                <a href="" title={`${item.first_name} ${item.last_name} ${index < 3 ? '(online)' : '(offline)'}`} className={`nav-link avatar ${index < 3 ? 'online' : ''}`}>
                                    <img src={item.avatars[0].url} className="d-block img-fluid fa-fw" />
                                </a>
                            </li>
                        )

                })
            }
        </ConstroiMenu>
    )
}

function LoadingPerfil() {
    return (
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    )
}

function MenuLogin() {
    const [allPerfil, setAllPerfil] = useState([]);
    const [update, setUpdate] = useState(0)

    const requestAvatars = async () => {
        try {
            const responseAvatars = await (await fetch('https://tinyfac.es/api/users')).json()
            setAllPerfil(responseAvatars)
        } catch (e) { }
    };

    useEffect(() => {
        requestAvatars()
    }, [update]);

    return (
        allPerfil.length ? <NavPerfil perfil={allPerfil} /> : <LoadingPerfil />
    )

}

function Navbar({ login }) {

    return (
        <div className="navbar">
            {login ? <MenuLogin /> : <MenuLogout />}
        </div>
    )
}

export default Navbar