import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './sections/Homepage';
import Footer from './components/Footer';
import NFT1 from './sections/NFT';
import NFT2 from './sections/NFT2';
import NFT3 from './sections/NFT3';
import NFT4 from './sections/NFT4';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/nft/1' element={<NFT1/>}></Route>
        <Route path='/nft/2' element={<NFT2/>}></Route>
        <Route path='/nft/3' element={<NFT3/>}></Route>
        <Route path='/nft/4' element={<NFT4/>}></Route>
        {/* <Route path='/nft/5' element={<NFT5/>}></Route>
        <Route path='/nft/6' element={<NFT6/>}></Route> */}

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
