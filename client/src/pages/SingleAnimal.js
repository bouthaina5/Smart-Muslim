import { urlAlphabet } from 'nanoid';
import React from 'react'
import { useParams ,Link } from 'react-router-dom'
import animals from '../Data';

export const SingleAnimal = () => {
    const { animalID } = useParams();
    const animal = animals.find((animal) => animal.id === animalID);
    const { image, bgImage} = animal;
    const bgStyle = {
        backgroundImage : `url(${bgImage})`, 
        width: "100vw",
        height: "100vh",
        backgroundRepeat: 'no-repeat',
    }
  return (
        <main style={bgStyle}>
            <img src={image} className='single-animal'/>
        </main>
       
   
  )
}
