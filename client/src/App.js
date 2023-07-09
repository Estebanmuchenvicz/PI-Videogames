import './App.css';
import Home from './pages/Home/Home';
import Detail from "./pages/Detail/Detail";
import { Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SerarchResults from './pages/SearchResults/SerarchResults'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/games/:name' element={<SerarchResults/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
