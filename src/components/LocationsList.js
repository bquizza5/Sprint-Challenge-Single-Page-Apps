import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState()

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(loc => {
        console.log(loc.data.results)
        setLocations(loc.data.results)

      })
      .catch(error => {
        console.log('fetch error: ' + error)
      })

  }, [])

  if (!locations) {
    return <h1>loading</h1>
  } else {

    return <section className='location-list grid-view'>


      {
        //   console.log(locations)
        
        // locations.map((location) => {
        //   return (
        //     <div className='card'>
        //       <div className='charData'>
        //         <h3>{location.name}</h3>
        //         <p>{`${person.species} ${person.status}`}</p>
        //         <p>Location: {person.location.name}</p>
        //         <p>Location: {person.origin.name}</p>
        //       </div>
        //     </div>
        //   )
        // })
      }

    </section>

  }
}

