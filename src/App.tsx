// import './App.css'
import './style.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Products from './pages/Products'
function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/products' element={<Products/>}></Route>
          {/* <Route path='/pricing' element={<Main />}></Route> */}
          {/* <Route path='/blog' element={<Main />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
