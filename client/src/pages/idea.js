import React from 'react'; 
import { NavLink } from 'react-router-dom';
import img4 from '../assets/retour.png'
function Idea(){
    return(
        <main className='backg'>
          <div className='petit2'>
            <NavLink to='/animals'>
           <img className='imag4' src={img4} /> 
           </NavLink>
           </div>
        </main>
    );
}
export default Idea ;