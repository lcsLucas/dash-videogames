import React from 'react'

function SectionSecundario({ games }) {
    return (
        <div className="section-content secondary">
            <div className="content game"><a title={games[0].name} href=""><div className="wrapper-img"><img alt="" className="d-block img-fluid" src={`./img/games/${games[0].img}`} /><div className="wrapper-descr"><h5 className="name-game">{games[0].name}</h5></div></div></a></div>
        </div>
    )
}

export default SectionSecundario