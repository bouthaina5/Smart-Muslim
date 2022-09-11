import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect,useState,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import animals from '../Data';
import mic from '../assets/mic.png';
import Stat from '../components/stat';
import settings from '../assets/Brain.png';
import arrow from '../assets/arrow.png';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
const SingleAnimal = () => {
    const { animalID } = useParams();
    const animal = animals.find((animal) => animal.id === animalID);
    const { image2, bgImage} = animal;
    const bgStyle = {
        backgroundImage : `url(${bgImage})` , 
        width:"100vw",
        height: "100vh",
        backgroundSize: "100% 100% ",
        backgroundPosition: "center",
        position:'fixed',
        backgroundRepeat :'no-repeat'
    }  
    const [food , setFood] = useState(0)
    const [water , setWater] = useState(0)
    const [play , setPlay] = useState(0)
    const [clean , setClean] = useState(0)    
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
  
    const commands = [
        {
            command: 'الحمد لله',
            callback: ()=>{
                setFood((prevfood)=>prevfood+2)
              }
            },
            {
              command: 'لا اله الا الله',
              callback: () => {
                setWater((prevwater)=>prevwater+2)
              },
            },
            {
              command:'سبحان الله',
              callback: () => {
                setPlay((prevplay)=>prevplay+2)
              },
            },
            ,
            {
              command: 'الله اكبر',
              callback: () => {
                setClean((prevclean)=>prevclean+2)
              },
            },
            {
                command: "open *",
                callback: (website) => {
                  window.open("http://" + website.split(" ").join(""));
                },
              },
          ];
        const { transcript, resetTranscript } = useSpeechRecognition({ commands });
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return (
                <div className="mircophone-container">
                Browser does not Support Speech Recognition.
                </div>
    );
  }

            const handleListing = () => {
                setIsListening(true);
                microphoneRef.current.classList.add("listening");
                SpeechRecognition.startListening({
                continuous: true,
                language:'ar-EG',
                });
            };
            const stopHandle = () => {
                setIsListening(false);
                microphoneRef.current.classList.remove("listening");
                SpeechRecognition.stopListening();
            };
            const handleReset = () => {
                stopHandle();
                resetTranscript();
            };
        return (
        <div style={bgStyle} className='backgimage'>
            {/* <div className='transcript'>{transcript}</div> */}
            <NavLink to={`/animals`}>
                <img  src={arrow} className='arrow' alt=''/>
            </NavLink>
            <NavLink to={`/images`}>
            <img src={settings} className='settings' alt=''/>
            </NavLink>
            <div 
            ref={microphoneRef}
            onClick={handleListing}
            className="microphone-icon-container">
                    <img src={mic} className="microphone-icon" />
            </div>
            <div className="single-animal-container" >
                <img src={image2} className='single-animal' alt=''/>
            </div>
            <div className='stats1'>
            <Stat 
                percentage={food}
                title= 'food'
            />
            <Stat 
                percentage={water}
                title='water'
                />
            </div>

            <div className='stats2'>
            <Stat 
                percentage={play}
                title='playing'
                />
            <Stat 
                percentage={clean}
                title='cleanness'
                />
            </div>            
        </div >
       
   
  )
}
 export default SingleAnimal;