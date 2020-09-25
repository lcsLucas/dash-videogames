import React from 'react'

function Store({ name, img }) {
    return (
        <div className="section-content secondary">
            <div className="content game">
                <a title="Cyberpunk 2077" href="">
                    <div className="wrapper-img">
                        <img alt="" className="d-block img-fluid" src={`./img/${img}`} />
                        <div className="wrapper-descr">
                            <h5 className="name-game">{name}</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

function SectionStore({ items }) {

    return (
        <div id="store">
            {
                items.map((item, index) => <Store key={index} name={item.name} img={item.img} />)
            }
        </div>
    )
}

export default SectionStore