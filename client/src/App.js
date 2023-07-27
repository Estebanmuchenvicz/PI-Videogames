import './App.css';
import Home from './pages/Home/Home';
import Detail from "./pages/Detail/Detail";
import { Routes, Route, useLocation} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/LandingPage/Landing';
import SerarchResults from './pages/SearchResults/SerarchResults'
import CreateGame from './components/Form/CreateGame';
import Error404 from './pages/Error/Error404';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      < main className="main-content">
      <Routes>
      <Route path='*' element={<Error404 />} />
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/games/:name' element={<SerarchResults/>}/>
      <Route path='/creategame' element={<CreateGame/>}/>
      </Routes>
      </main>
      {location.pathname !== '/' && <Footer/>}
    </div>
  );
}

export default App;
