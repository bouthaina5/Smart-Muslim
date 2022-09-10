import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import animals from '../Data';
import mic from '../assets/mic.png';
import Stat from '../components/stat';
import settings from '../assets/Brain.png';
import * as tf from '@tensorflow/tfjs';
import * as speech from '@tensorflow-models/speech-commands';
import arrow from '../assets/arrow.png';

var createHost = require('cross-domain-storage/host');
var createGuest = require('cross-domain-storage/guest');
var storageHost = createHost([
    {
        origin: 'https://storage.googleapis.com/tfjs-speech-model-test/2019-01-03a/dist/index.html',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'http://localhost:3000',
        allowedMethods: ['get'],
    },
]);

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
        const [model , setModel] = useState('');

        // useEffect(()=>{
        //     const model = JSON.parse(localStorage.getItem('SmartMuslim'));
        //     if(model) {
        //         setModel(model);            }
        // },[])


        // const Url = {
        //     model: 'https://storage.googleapis.com/tfjs-speech-model-test/2019-01-03a/dist/index.html'
        // }
        /*async function loadModel(Url){
            try {
                const model  = await tf.loadGraphModel(Url.model);
                setModel(model);
                console.log('load model successful')
            } catch (err) {
                console.log(err)
            }
        }

        useEffect(()=>{
            tf.ready().then(()=>loadModel(Url))
        })*/

        // useEffect(() => {
        //     setFood(JSON.parse(window.localStorage.getItem('food')));
        //   }, []);
        
        //   useEffect(() => {
        //     window.localStorage.setItem('food',food);
        //   }, [food]);


        // function add() {
        //     setFood(prevState => prevState + 1 )
        // }

        // function sub(){
        //     setFood(prevState => prevState - 1)
        // }

        //const model = await tf.loadLayersModel("C:/Users/Bouthayna Ben Hamida/Desktop/PrayersRecognition.json");
            return (
        <div style={bgStyle} className='backgimage'>
            <NavLink to={`/animals`}>
                <img  src={arrow} className='arrow' alt=''/>
            </NavLink>
            <NavLink to={`/images`}>
            <img src={settings} className='settings' alt=''/>
            </NavLink>
            <button className='mic-button' ><img src={mic} className="mic" alt="" onClick={console.log("listen to command")}/></button>
            <div className="single-animal-container" >
                <img src={image2} className='single-animal' alt=''/>
            </div>
            {/* {<button
                onClick={(e)=>{
                    e.preventDefault()
                    var bazStorage = createGuest(
                        window.location.href === 'http://localhost:3000' 
                        ? 'https://storage.googleapis.com/tfjs-speech-model-test/2019-01-03a/dist/index.html'
                        :'http://localhost:3000'
                    );
                    bazStorage.get('tfjs-speech-commands-saved-model-metadata',function(error,value){
                        if(error){
                            console.log(error)
                        }
                        else {
                            setModel(value)
                        }
                    })
                }}
            
            >Access from cross domain Storage</button>
            <p>value stored in cross domain storage is :{" "} {model} </p>} */}
            <div className='stats1'>
            <Stat 
                percentage={clean}
                title= 'food'
            />
            <Stat 
                percentage={food}
                title='water'
                />
            </div>

            <div className='stats2'>
            <Stat 
                percentage={water}
                title='playing'
                />
            <Stat 
                percentage={play}
                title='cleanness'
                />
            </div> 
            {/* {<div>
                <button onClick={add}>add food</button>
                <button onClick={sub}>sub food</button>
            </div>} */}
            
        </div >
       
   
  )
}
 export default SingleAnimal;