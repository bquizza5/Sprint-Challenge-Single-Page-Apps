import React, { useEffect, useState } from 'react';
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
            <div className='card'>
              <img src={person.image}></img>
              <div className='charData'>
                <h3>{person.name}</h3>
                <p>{`${person.species} ${person.status}`}</p>
                <p>Location: {person.location.name}</p>
                <p>Location: {person.origin.name}</p>
              </div>
            </div>
          )
        })
      }

    </section>

  }
}
