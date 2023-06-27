
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7b73c8a9063f4232ab69b32dff07b2ca'
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' title = 'INDIA' element={<News url = {url}/>} />
        <Route path='/sports' title = 'INDIAN SPORTS' element={<News url = {url + '&q=sports'}/>} />

      </Routes>
    </Router>
  );
}

export default App;
