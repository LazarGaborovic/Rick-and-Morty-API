import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import axios from 'axios';
import './Cartoon.css';
const Cartoon = () => {

    const [characters, SetCharacters] = useState([]);

    useEffect (() => {
  
        const fetchData = async () => {
          try {
              const {data} = await axios.get("https://rickandmortyapi.com/api/character");
              SetCharacters(data.results);
          } catch {
            console.log();
          }
        }
  
        fetchData();
    }, [])
  
  return (
    <div className='results'>  
    {characters.map(character => (
      <div>
        <img src={character.image} alt={character.name} />
        {character.name}
         </div>
    ))}
  
  </div>   
  )
}

export default Cartoon