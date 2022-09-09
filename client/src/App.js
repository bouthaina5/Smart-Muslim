import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Images from '../src/pages/images'
import Prayer from '../src/pages/prayer'
import Idea from '../src/pages/idea'
import './App.css';
import Animals  from './pages/Animals';
import SingleAnimal  from './pages/SingleAnimal';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Animals />}/>
        <Route path='/:animalID' element={<SingleAnimal/>} />
        <Route path='images' element={<Images/>} />
        <Route path='prayer' element={<Prayer/>} />
        <Route path='idea' element={<Idea/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
