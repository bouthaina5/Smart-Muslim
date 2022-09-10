import React, {  useState } from 'react';
import './App.css';

const App = ({navigation}) => {
  const [user,setUser]=useState({userName:""})
  return (
    <div className="bg">

      <h1><br></br><br></br>Welcome to </h1>
      <h1>Smart-Muslim</h1>
      <br></br> <br></br> <br></br>

      <formContainer>
        <form>

          <input
            type='text'
            placeholder='Username'
            name='username'
            value= {user.userName}

            onChangeText = {(text)=>{
              setUser({userName:text});
              }}
          />



          <br></br><br></br><br></br>
          <button title="type" submit onPress={() =>navigation.navigate('HomePage',{"userName":user.userName}) } >start</button>

  

        </form>
      </formContainer>
    </div>

  );


}
export default App;