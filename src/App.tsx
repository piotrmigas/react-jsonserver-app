import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header title='Task Tracker' />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
