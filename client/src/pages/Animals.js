import React, { useState } from 'react'
import animals from '../Data'
import { NavLink } from 'react-router-dom'
import exit from '../assets/exit.png';
import param from '../assets/settings.png'
import Fade from 'react-reveal/Fade';
const Animals = ({user}) => {

    const animalsList = animals.map(({id,name,image,bgImage})=>{
        return (
                <Fade bottom>
                <NavLink to={`/${id}`}>
                    <img src={image} className='animal-image' alt=""/>
                </NavLink>
                </Fade>)})
                
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
  return (
    <main className='animals-container'>
        <Fade top>
        <p className='welcome-back'>Welcome back,</p>
        </Fade>
        <Fade bottom>
        <p className='userName'>{user?.name}!</p>
        </Fade>
        <img src={exit} className='exit' alt=""/>
        <NavLink to ='/idea'>
        <img src={param} className='param' alt=''/>
        </NavLink>
        <p className='choose-animal'>Choose Your Animal </p>
        <div className='animals-list'>
            {animalsList}
        </div>
    </main>
  )
}
 export default Animals;