import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import {BrowserRouter as Router , Routes, Route, } from 'react-router-dom'

import theme from './theme'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const App = () => {

  return (
    <div>
        <ThemeProvider theme = {theme}>
          <Router>

           <Navbar/>
           <Hero/>
           <Routes>
              <Route path="/">
                <Route path="about"/>
                <Route path="research"/>
                <Route path="incubator"/>
                <Route path="contact"/>
              </Route>
           </Routes>

        </Router>
      </ThemeProvider> 
    </div>
  )
}

export default App