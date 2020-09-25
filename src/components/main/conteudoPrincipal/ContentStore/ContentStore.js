import React from 'react'
import SectionStore from './SectionStore'

function ContentStore() {
    return (
        <>
            <SectionStore items={[
                {
                    name: 'Games',
                    img: 'games.jpg'
                },
                {
                    name: 'Movies & TV',
                    img: 'movies.jpg'
                },
                {
                    name: 'Music',
                    img: 'music.jpg'
                },
                {
                    name: 'Apps',
                    img: 'apps.jpg'
                },
            ]} />
        </>
    )
}

export default ContentStore