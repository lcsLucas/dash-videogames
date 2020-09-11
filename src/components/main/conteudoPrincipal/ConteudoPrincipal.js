import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import Home from './ContentHome'
import Pins from './ContentPins'
import Store from './ContentStore'

const sections = [
    {name: "Home", compReact: <Home key="home" />},
    {name: "Pins", compReact: <Pins key="pins" />},
    {name: "Store", compReact: <Store key="store" />}
]

function ConteudoPrincipal() {
    const child = { width: `30em`, height: `100%` }

    return (
        <div className="w-100 h-100">
            <HorizontalScroll reverseScroll={true}>
                {
                    sections.map(sec => (sec.compReact))
                }
                <div className="bg-danger" style={child}></div>
                <div className="bg-success" style={child}></div>
                <div className="bg-primary" style={child}></div>
                <div className="bg-warning" style={child}></div>
                <div className="bg-info" style={child}></div>
            </HorizontalScroll>
        </div>
    )
}

export default ConteudoPrincipal