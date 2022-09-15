import React from 'react'; 
import { NavLink } from 'react-router-dom';
import img4 from '../assets/retour.png'
function Idea(){
    return(
        <main className='backg'>
          <p className='description'> 
          You can choose an animal from several different choices <br></br>
          and evolves its characteristics by taking good care of it <br></br>
          and performing different actions.<br></br>
          The animal will be fed by duas like (سبحان الله ، الحمد  <br></br>
          ، لا الاه الا الله و الله أكبر), <br></br>
          cleaned by others, which are either spoken by the user or <br></br>
          by clicking on icons featuring these duas.<br></br>
          </p>
          <div className='petit2'>
            <NavLink to='/animals'>
           <img className='imag4' src={img4} /> 
           </NavLink>
           </div>
        </main>
    );
}
export default Idea ;