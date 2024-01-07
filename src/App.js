import './App.css';
import Button from './components/Button';
import PostList from './components/PostList';
import PostBox from './components/PostBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
   </div>
    
   
  );
}

export default App;
