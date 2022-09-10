import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Welcomepage = ({ setUser }) => {
    const [name,setName] =useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name) return;
        setUser({ name: name});
        navigate('/animals');
    };
    return (
      <div className="bg">
        <Fade top cascade>
        <div>
          <h1 className='welcome1'><br></br><br></br>Welcome to </h1>
          <br></br><br></br>
          <h1 className='welcome2'>Smart-Muslim</h1>
        </div>
        </Fade>
        <br></br> <br></br> <br></br>
          <form className='form' onSubmit={handleSubmit}>
            <Fade top>
            <p className='user'>User Name</p>
            </Fade>
            <Fade top>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='input'
            />
            </Fade>
            <br></br><br></br><br></br>
            <Fade top>
            <button type='submit' className='start-button'>start</button>
            </Fade>
          </form>
      </div>
  
    );
  }
  export default Welcomepage;