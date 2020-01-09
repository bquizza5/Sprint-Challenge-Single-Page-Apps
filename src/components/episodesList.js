import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Card } from 'semantic-ui-react'

export default function EpisodesList() {
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState()

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


        axios
            .get('https://rickandmortyapi.com/api/episode/')
            .then(epis => {
                console.log(epis.data.results)
                setEpisodes(epis.data.results)

            })
            .catch(error => {
                console.log('fetch error: ' + error)
            })

    }, [])

    if (!episodes) {
        return <h1>loading</h1>
    } else {

        return <section className='character-list grid-view'>


            {
                // console.log(episodes)
                episodes.map((episode) => {
                    return (
                        <Card>
                            <h2>{episode.name}</h2>
                            <p>{episode.episode} - {episode.air_date}</p>
                            
                        </Card>

                    )
                })
            }

        </section>

    }
}
