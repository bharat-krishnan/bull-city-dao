import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import {BrowserRouter as Router , Routes, Route, } from 'react-router-dom'

import theme from './theme'

import Navbar from './Components/Nav/Navbar'

import Home from './Pages/Home'
import Research from './Pages/Research'
import Content from './Pages/Content'
import ComingSoon from './Pages/ComingSoon'
import Team from './Pages/Team'

const App = () => {

  return (
    <div>
       

      
        <ThemeProvider theme = {theme}>
          <Router>

           <Navbar/>
           <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="content"  element = {<Content/>} />
                <Route path="research" element = {<Research/>}/>
                <Route path="incubator" element = {<ComingSoon/>}/>
                <Route path="contact" element = {<ComingSoon/>}/>
                <Route path="team" element = {<Team/>}/>
              </Route>
           </Routes>
          
        </Router>
      </ThemeProvider> 
     
    </div>
  )
}

export default App