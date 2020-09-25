import React, { useEffect } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

import Home from './ContentHome'
import Pins from './ContentPins'
import Store from './ContentStore'

const sections = [
    { name: "Home", compReact: <Home key="home" /> },
    { name: "Pins", compReact: <Pins key="pins" /> },
    { name: "Store", compReact: <Store key="store" /> }
]

function ConteudoPrincipal() {
    const child = { width: `30em`, height: `100%` }

    useEffect(() => {

        const nav_principal = document.querySelector(".nav-principal")
        const nav_home = nav_principal.querySelector('a[href="#home"]')
        const nav_pins = nav_principal.querySelector('a[href="#pins"]')
        const nav_store = nav_principal.querySelector('a[href="#store"]')

        const scroll_horizontal = document.querySelector('.scroll-horizontal')
        const section_home = scroll_horizontal.querySelector('#home')
        const section_pins = scroll_horizontal.querySelector('#pins')

        function setActive(el_target) {
            const active_current = nav_principal.querySelector('.active')
            active_current && active_current.classList.remove('active')
            el_target.classList.add('active')
        }

        scroll_horizontal.addEventListener('wheel', () => {

            if (scroll_horizontal.scrollWidth > 3150)
                setActive(nav_home)
            else if (scroll_horizontal.scrollWidth <= 2000)
                setActive(nav_store)
            else
                setActive(nav_pins)

        });

    })

    return (
        <div className="w-100 h-100">
            <HorizontalScroll reverseScroll={true} >
                {
                    sections.map(sec => (sec.compReact))
                }
            </HorizontalScroll>
        </div>
    )
}

export default ConteudoPrincipal