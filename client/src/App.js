import './App.css';
import Home from './pages/Home/Home';
import Detail from "./pages/Detail/Detail";
import { Routes, Route, useLocation} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/LandingPage/Landing';
import SerarchResults from './pages/SearchResults/SerarchResults'
import CreateGame from './components/Form/CreateGame';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/games/:name' element={<SerarchResults/>}/>
      <Route path='/creategame' element={<CreateGame/>}/>
      </Routes>
      {location.pathname !== '/' && <Footer/>}
    </div>
  );
}

export default App;
