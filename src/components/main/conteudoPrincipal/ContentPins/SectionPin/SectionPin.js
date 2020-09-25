import React from 'react'

function SectionPin({ games }) {

    return (
        <div id="pins">
            <div className="section-content destaque pins">
                <div>
                    <div className="h-100 d-flex flex-column content secundario">
                        <div className="content feature mb-px-10 h-50">
                            <a title={games[0].name} href="">
                                {games[0].img}
                                <h4>
                                    {games[0].name}
                                </h4>
                            </a>
                        </div>
                        <div className="content feature h-50">
                            <a title={games[1].name} href="">
                                {games[1].img}
                                <h4>
                                    {games[1].name}
                                </h4>
                            </a>
                        </div>
                    </div>
                    <div className="h-100 d-flex flex-column content secundario">
                        <div className="content feature mb-px-10 h-50">
                            <a title={games[2].name} href="">
                                {games[2].img}
                                <h4>
                                    {games[2].name}
                                </h4>
                            </a>
                        </div>
                        <div className="content feature h-50">
                            <a title={games[3].name} href="">
                                {games[3].img}
                                <h4>
                                    {games[3].name}
                                </h4>
                            </a>
                        </div>
                    </div>
                    <div className="h-100 d-flex flex-column content secundario">
                        <div className="content feature mb-px-10 h-50">
                            <a title={games[4].name} href="">
                                {games[4].img}
                                <h4>
                                    {games[4].name}
                                </h4>
                            </a>
                        </div>
                        <div className="content feature h-50">
                            <a title={games[5].name} href="">
                                {games[5].img}
                                <h4>
                                    {games[5].name}
                                </h4>
                            </a>
                        </div>
                    </div>
                    <div className="h-100 d-flex flex-column content secundario">
                        <div className="content feature mb-px-10 h-50">
                            <a title={games[6].name} href="">
                                {games[6].img}
                                <h4>
                                    {games[6].name}
                                </h4>
                            </a>
                        </div>
                        <div className="content feature h-50">
                            <a title={games[7].name} href="">
                                {games[7].img}
                                <h4>
                                    {games[7].name}
                                </h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content feature">
                        <a title={games[8].name} href="">
                            {games[8].img}
                            <h4>
                                {games[8].name}
                            </h4>
                        </a>
                    </div>
                    <div className="content feature">
                        <a title={games[9].name} href="">
                            {games[9].img}
                            <h4>
                                {games[9].name}
                            </h4>
                        </a>
                    </div>
                    <div className="content feature">
                        <a title={games[10].name} href="">
                            {games[10].img}
                            <h4>
                                {games[10].name}
                            </h4>
                        </a>
                    </div>
                    <div className="content feature">
                        <a title={games[11].name} href="">
                            {games[11].img}
                            <h4>
                                {games[11].name}
                            </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionPin