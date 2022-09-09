import React from 'react'
import animals from '../Data'
import { NavLink } from 'react-router-dom'
import {nanoid} from 'nanoid';
import exit from '../assets/exit.png';
import param from '../assets/settings.png'
const Animals = () => {
    const animalsList = animals.map(({id,name,image,bgImage})=>{
        return (
            <div className='animal-item' >
                <NavLink 
                to={`/${id}`} 
                className={({isActive}) => {
                    return isActive ? 'active' : 'link'}}
                    style={{ textDecoration: 'none' }}
                >
                    <img src={image} className='animal-image' alt=""/>
                </NavLink>
            </div>
        )
    })
  return (
    <main className='animals-container'>
        <img src={exit} className='exit' alt=""/>
        <img src={param} className='param' alt=''/>
        <p className='choose-animal'>Choose Your Animal </p>
        <div className='animals-list'>{animalsList}</div>
    </main>
  )
}
 export default Animals;