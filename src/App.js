import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import {BrowserRouter as Router , Routes, Route, } from 'react-router-dom'

import theme from './theme'

import Navbar from './Components/Nav/Navbar'

import Home from './Pages/Home'
import ComingSoon from './Pages/ComingSoon'

const App = () => {

  return (
    <div>
       

      
        <ThemeProvider theme = {theme}>
          <Router>

           <Navbar/>
           <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="about"  element = {<ComingSoon/>} />
                <Route path="research" element = {<ComingSoon/>}/>
                <Route path="incubator" element = {<ComingSoon/>}/>
                <Route path="contact" element = {<ComingSoon/>}/>
              </Route>
           </Routes>
          
        </Router>
      </ThemeProvider> 
     
    </div>
  )
}

export default App