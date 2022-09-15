import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import img3 from '../assets/pr1.png'
import img2 from '../assets/retour.png'
import img1 from '../assets/bois.png'
function Images(){
    const [foodDoua,setFoodDoua]= useState('');
    const [waterDoua,setWaterDoua]=useState('');
    const [playDoua,setPlayDoua]=useState('');
    const [cleanDoua,setCleanDoua]=useState('');

    function handleFood(event){
      const {value} = event.target
      setFoodDoua(value)
      localStorage.setItem('foodDoua',JSON.stringify(value));
    }

    function handleWater(event){
      const {value} = event.target
      setWaterDoua(value)
      localStorage.setItem('waterDoua',JSON.stringify(value));
    }

    function handlePlay(event){
      const {value} = event.target
      setPlayDoua(value)
      localStorage.setItem('playDoua',JSON.stringify(value))
    }

    function handleClean(event){
      const {value} = event.target
      setCleanDoua(value)
      localStorage.setItem('cleanDoua',JSON.stringify(value))
    }
    
    return(
      <section className='section'>
        <main className='fond'>
           <div className='petit'>
            <img className='imag1' src={img1} />
           </div>
            <p className='para'>
            You can choose which doua 
            <br></br>
            can perform a certain action
            </p> 
            < Link to ="/prayer"><img className='imag3' src={img3} /> </Link>
            <h1 className='food'>Food</h1>
            <h1 className='water'>Water</h1>
            <h1 className='cleanness'>Cleanness</h1>
            <h1 className='playing'>Playing</h1>
              <div className='petit1'>
            <NavLink to='/animals'>
           <img className='imag2' src={img2} /> 
            </NavLink>
           </div>
          <div className='custom-select'>
              <select className='s1'
                id='foodDoua'
                value={foodDoua}
                name='foodDoua'
                onChange={handleFood}
              >
                  <option value="الحمدُ لِلَّهِ" selected>الحمدُ لِلَّهِ</option>
                  <option value="رَّبِّ زِدْنِي عِلْمًا">رَّبِّ زِدْنِي عِلْمًا</option>
                  <option value="اللَّهُمَّ إنِّي أَسْأَلُكَ الهُدَى">اللَّهُمَّ إنِّي أَسْأَلُكَ الهُدَى</option>
                  <option value="اللَّهمَّ اجْعَلْ في قَلْبِي نوراً">اللَّهمَّ اجْعَلْ في قَلْبِي نوراً</option>
                  <option value="رَبِّ اشْرَحْ لِي صَدْرِي">رَبِّ اشْرَحْ لِي صَدْرِي</option>
              </select>
          </div>
          <div className='custom-select1'
              id='waterDoua'
              value={waterDoua}
              name='waterDoua'
              onChange={handleWater}
          >
            <select className='s2'>
                <option value="لَا إِلَهَ اللهُ إِلَّا" selected>لَا إِلَهَ إِلَّا اللهُ</option>
                <option value="رَبَّنَا تَقَبَّلْ مِنَّا" >رَبَّنَا تَقَبَّلْ مِنَّا</option>
                <option value="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً</option>
                <option value="رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً">رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً</option>
                <option value="رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا">رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا</option>
            </select>
          </div>
          <div className='custom-select2'
              id='CleanDoua'
              value={cleanDoua}
              name='cleanDoua'
              onChange={handleClean}
          >
            <select className='s3'>
              <option value="الْلَّهُ أَكْبَرُ" selected>الْلَّهُ أَكْبَرُ</option>
              <option value="اللَّهُمَّ أعنَّا على شُكْرِكَ" >اللَّهُمَّ أعنَّا على شُكْرِكَ</option>
              <option value="رَبَّنَا أَتْمِمْ لَنَا نُورَنَا">رَبَّنَا أَتْمِمْ لَنَا نُورَنَا</option>
              <option value="رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ">رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ</option>
              <option value="رَبَّنَا هَبْ لَنَا مِنْ ذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ">رَبَّنَا هَبْ لَنَا مِنْ ذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ</option>
            </select>
        </div>
        <div className='custom-select3'
            id='playDoua'
            value={playDoua}
            name='playDoua'
            onChange={handlePlay}
        >
            <select className='s4'>
                <option value="سُبْحَانَ الْلَّهِ" selected>سُبْحَانَ الْلَّهِ</option>
                <option value="رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ" >رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ</option>
                <option value="رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا">رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا</option>
                <option value="رَّبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا">رَّبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا</option>
                <option value="رَبِّ إِنِّي كُنتُ مِنَ الظَّالِمِينَ">رَبِّ إِنِّي كُنتُ مِنَ الظَّالِمِينَ</option>
            </select>
        </div>
      </main>
</section>)
}
export default Images ;
