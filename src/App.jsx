import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './sections/Homepage';
import Footer from './components/Footer';
import NFT from './sections/NFT';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/id' element={<NFT/>}></Route>

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
