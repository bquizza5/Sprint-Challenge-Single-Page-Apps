import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState()

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(char => {
        // console.log(char.data.results)
        setCharacters(char.data.results)

      })
      .catch(error => {
        console.log('fetch error: ' + error)
      })

  }, [])

  if (!characters) {
    return <h1>loading</h1>
  } else {

    return <section className='character-list grid-view'>


      {
        // console.log(characters)
        characters.map((person) => {
          return (
            <Card>
              <img src={person.image}></img>
              <div>
                <h2>{person.name}</h2>
                <p>{`${person.species} ${person.status}`}</p>
                <p>Location: {person.location.name}</p>
                <p>Origin: {person.origin.name}</p>
              </div>
            </Card>
          )
        })
      }

    </section>

  }
}
