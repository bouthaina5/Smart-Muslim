import React from 'react';
import img1 from '../src/bois.png'
import img2 from '../src/retour.png'
function Images(){
    return(
        <main className='fond'>
            
         
            
           <div className='petit'>
            <img className='imag1' src={img1} />
           </div>
            <p className='para'>
            You can choose which doua 
            <br></br>
            can perform a certain action
            </p> 
       
            <h1 className='food'>Food</h1>
            <h1 className='water'>Water</h1>
            <h1 className='cleanness'>Cleanness</h1>
            <h1 className='playing'>Playing</h1>
          <div className='petit1'>
            <a href='#'>
           <img className='imag2' src={img2} /> 
           </a>
           </div>
<div className='custom-select'>
            <select className='s1'>
                
  <option value="valeur1" selected>
  الحمدُ لِلَّهِ</option>
  <option value="valeur2" >رَّبِّ زِدْنِي عِلْمًا
</option>
  <option value="valeur3">اللَّهُمَّ إنِّي أَسْأَلُكَ الهُدَى
</option>
<option value="valeur4">اللَّهمَّ اجْعَلْ في قَلْبِي نوراً


</option>
<option value="valeur5">رَبِّ اشْرَحْ لِي صَدْرِي

</option>

</select>
<span className='custom-arrow'></span>
</div>

<div className='custom-select1'>
            <select className='s2'>
  <option value="valeur1" selected>لَا إِلَهَ إِلَّا اللهُ</option>
  <option value="valeur2" >رَبَّنَا تَقَبَّلْ مِنَّا

</option>
  <option value="valeur3">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً
</option>
<option value="valeur4">رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً


</option>
<option value="valeur5">رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا

</option>
</select>
<span className='custom-arrow1'></span>
</div>
<div className='custom-select2'>
            <select className='s3'>
  <option value="valeur1" selected>الْلَّهُ أَكْبَرُ</option>
  <option value="valeur2" >اللَّهُمَّ أعنَّا على شُكْرِكَ


</option>
  <option value="valeur3">رَبَّنَا أَتْمِمْ لَنَا نُورَنَا
</option>
<option value="valeur4">رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ


</option>
<option value="valeur5">رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ

</option>
</select>
<span className='custom-arrow3'></span>
</div>
<div className='custom-select3'>
            <select className='s4'>
  <option value="valeur1" selected>سُبْحَانَ الْلَّهِ</option>
  <option value="valeur2" >رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ
</option>
  <option value="valeur3">رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا
</option>
<option value="valeur4">رَّبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ


</option>
<option value="valeur5">لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ

</option>
</select>
<span className='custom-arrow3'></span>
</div>
</main>

        
    )
}
export default Images ;
