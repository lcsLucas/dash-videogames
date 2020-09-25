import React from 'react'

function SectionPrincipal({ games }) {

    return (
        <div className="section-content destaque">
            <div>
                <div className="content destaque">
                    <a title={games[0].name} href="">
                        <div className="wrapper-img">
                            <img className="img-fluid d-block w-100" src={`./img/games/${games[0].img}`} />
                        </div>
                        <div className="wrapper-descr">
                            <h3 className="name-game">
                                {games[0].name}
                            </h3>
                            <p className="descr-game">
                                {games[0].description}
                            </p>
                        </div>
                    </a>
                </div>
                <div className="h-100 d-flex flex-column content secundario">
                    <div className="content feature mb-px-10 h-50">
                        <a title={games[1].name} href="">
                            {games[1].img}
                            <h4>
                                {games[1].name}
                            </h4>
                        </a>
                    </div>
                    <div className="content feature h-50">
                        <a title={games[2].name} href="">
                            {games[2].img}
                            <h4>
                                {games[2].name}
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="content game">
                    <a title={games[3].name} href="">
                        <div className="wrapper-img">
                            <img alt="" className="d-block img-fluid" src={`./img/games/${games[3].img}`} />
                            <div className="wrapper-descr">
                                <h5 className="name-game">
                                    {games[3].name}
                                </h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="content feature">
                    <a title={games[4].name} href="">
                        {games[4].img}
                        <h4>
                            {games[4].name}
                        </h4>
                    </a>
                </div>
                <div className="content feature">
                    <a title={games[5].name} href="">
                        {games[5].img}
                        <h4>
                            {games[5].name}
                        </h4>
                    </a>
                </div>
                <div className="content game">
                    <a title={games[6].name} href="">
                        <div className="wrapper-img">
                            <img alt="" className="d-block img-fluid" src={`./img/games/${games[6].img}`} />
                            <div className="wrapper-descr">
                                <h5 className="name-game">
                                    {games[6].name}
                                </h5>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SectionPrincipal