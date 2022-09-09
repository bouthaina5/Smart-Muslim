import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Animals  from './pages/Animals';
import SingleAnimal  from './pages/SingleAnimal';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Animals />}/>
        <Route path='/:animalID' element={<SingleAnimal/>} />
        
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
