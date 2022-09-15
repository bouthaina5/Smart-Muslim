import React ,{useContext} from 'react';
import { useParams} from 'react-router-dom';
import {useState,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import animals from '../Data';
import mic from '../assets/mic.png';
import Stat from '../components/stat';
import settings from '../assets/Brain.png';
import arrow from '../assets/arrow.png';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Fade from 'react-reveal/Fade';
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

    // Contexts
    //const [language] = useContext(LanguageContext);
    // const [loaded, data] = useContext(FetchedDataContext);

    // // Get Prayer Time
    // const timings = loaded && data.timings;

    // // Remove additional data
    // const additional = ['Sunrise', 'Imsak','Midnight', 'Sunset', 'Firstthird', 'Lastthird'];
    // additional.forEach(i => delete timings[i]);

    // // Get Prayer Names
    // const prayer_en =  Object.keys(timings);
    // const prayer_ar = [ 'الفجر', 'الظهر','العصر','المغرب', 'العشاء'];
    // const prayerNames = language === "en" ? prayer_en : prayer_ar;

    // // Get Prayer Times
    // const prayTimes =  Object.values(timings);
    // const  [remaineTime, nextPray] = useNextPrayer(prayTimes);

  
    const commands = [
        {
            command: 'الحمد لله',
            callback: ()=>{
                setFood((prevfood)=>prevfood+5)
              }
            },
            {
              command: 'لا اله الا الله',
              callback: () => {
                setWater((prevwater)=>prevwater+5)

              },
            },
            {
              command:'سبحان الله',
              callback: () => {
                setPlay((prevplay)=>prevplay+5)
              },
            },
            ,
            {
              command: 'الله اكبر',
              callback: () => {
                setClean((prevclean)=>prevclean+5)
              },
            },
            {
              command: "ربي زدني علما",
              callback: ()=>{
                setFood((prevfood)=>prevfood+5)
              }
            },
            {
              command: "اللهم اني اسالك الهدى",
              callback: ()=>{
                setFood((prevfood)=>prevfood+5)
              }
            },
            {
              command: "اللهم اجعل في قلبي نورا",
              callback: ()=>{
                setFood((prevfood)=>prevfood+5)
              }
            },
            {
              command: "ربي اشرح لي صدري",
              callback: ()=>{
                setFood((prevfood)=>prevfood+5)
              }
            },
            {
              command: "ربنا تقبل منا",
              callback: () => {
                setWater((prevwater)=>prevwater+5)
              },
            },
            {
              command: "ربنا اتنا في الدنيا حسنه",
              callback: () => {
                setWater((prevwater)=>prevwater+5)
              },
            },
            {
              command: "ربنا اتنا من لدنك رحمه",
              callback: () => {
                setWater((prevwater)=>prevwater+5)
              },
            }, {
              command: "ربنا اغفر لنا ذنوبنا",
              callback: () => {
                setWater((prevwater)=>prevwater+5)
              },
            },
            {
              command: "اللهم اعنا على شكرك",
              callback: () => {
                setClean((prevclean)=>prevclean+5)
              },
            },
            {
              command: "ربنا اتمم لنا نورنا",
              callback: () => {
                setClean((prevclean)=>prevclean+5)
              },
            },
            {
              command: "ربي اعوذ بك من همزات الشياطين",
              callback:() => {
                setClean((prevclean)=>prevclean+5)
              },
            },
            {
              command: "ربنا هب لنا من ذرياتنا قره اعين",
              callback: () => {
                setClean((prevclean)=>prevclean+5)
              },
            },
            {
              command: "ربي اجعلني مقيم الصلاه",
              callback: () => {
                setPlay((prevplay)=>prevplay+5)
              },
            },
            {
              command: "ربنا افرغ علينا صبرا",
              callback: () => {
                setPlay((prevplay)=>prevplay+5)
              },
            },
            {
              command: "ربي انزلني منزلا مباركا",
              callback: () => {
                setPlay((prevplay)=>prevplay+5)
              },
            },
            {
              command: "ربي اني كنت من الظالمين",
              callback: () => {
                setPlay((prevplay)=>prevplay+5)
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
          <NavLink to={`/images`}>
            <div className='settings'>
              <img src={settings}  alt='' className='brain'/>
            </div>
            </NavLink>
          {/* <Fade top>
            <div className='transcript'>{transcript}</div> 
          </Fade> */}
            <NavLink to={`/animals`}>
                <img  src={arrow} className='arrow' alt=''/>
            </NavLink>
            <div 
            ref={microphoneRef}
            onClick={handleListing}
            className="microphone-icon-container">
                    <img src={mic} className="microphone-icon" />
            </div>
            {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>)}
            <div className="single-animal-container" >
                <Fade buttom>
                <img src={image2} className='single-animal' alt=''/>
                </Fade>
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