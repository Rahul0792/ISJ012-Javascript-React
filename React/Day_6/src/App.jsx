import { BrowserRouter, Routes, Route } from 'react-router-dom' //Importing Compulsory===========================================
import About from './pages/About'              //  Pages Imported
import Contact from './pages/Contact'          //  Pages Imported
import Home from './pages/Home'                //  Pages Imported
import './App.css'
import NotFound from './pages/NotFound'        //  Pages Imported

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* / means main page or index page  */}
          <Route path="/" element={<Home />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='NotFound' element={<NotFound />}></Route>

          {/* * means if path is incorrect then it open its perticular page  */}
          <Route path='*' element={<NotFound />}></Route>



          <Route path='Contact/:id' element={< Contact />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

