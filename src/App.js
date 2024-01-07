import './App.css';
import Button from './components/Button';
import PostList from './components/PostList';
import PostBox from './components/PostBox';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import WritePage from './components/WritePage';
import ViewPage from './components/ViewPage';
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Mainpage/>}/>
         <Route path="postwrite" element={<WritePage/>}/>
         <Route path="postview" element={<ViewPage/>}/>
      </Routes>
    </BrowserRouter>
   </div>
    
   
  );
}

export default App;
