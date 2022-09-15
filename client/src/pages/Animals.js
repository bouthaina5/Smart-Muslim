import React, { useState } from 'react'
import animals from '../Data'
import { NavLink } from 'react-router-dom'
import exit from '../assets/exit.png';
import param from '../assets/settings.png'
import Fade from 'react-reveal/Fade';
const Animals = () => {

    const animalsList = animals.map(({id,name,image,bgImage})=>{
        return (
                <Fade bottom>
                <NavLink to={`/${id}`}>
                    <img src={image} className='animal-image' alt=""/>
                </NavLink>
                </Fade>)})

      // const createScheduledNotification = async(tag,title)=>{
      //   const registration = await navigator.serviceWorker.getRegistration();
      //   registration.showNotification(title,{
      //     tag: tag,
      //     body : 'this notification was scheduled 30 seconds ago',
      //     showTrigger : new TimestampTrigger( 30 * 1000)
      //   });
      // };

      navigator.serviceWorker.register('sw.js');
      function showNotification() {
        Notification.requestPermission((result) => {
          if (result === 'granted') {
            navigator.serviceWorker.ready.then((registration) => {
              registration.showNotification('Vibration Sample', {
                body: 'Buzz! Buzz!',
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: 'vibration-sample',
                timestamp: 30,
              });
            });
          }
        });
      }
      

  return (
    <main className='animals-container'>
          <button className="notification" onClick={showNotification}>
            Allow Notifications
          </button>
        <Fade top>
        <p className='welcome-back'>Welcome back,</p>
        </Fade>
        <Fade bottom>
        <p className='userName'>{localStorage.getItem('all-users')}!</p>
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