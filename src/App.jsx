import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {

  return (
   <>
   <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home />} />

      </Routes>
    </BrowserRouter>
    

   </>
  )
}

export default App
