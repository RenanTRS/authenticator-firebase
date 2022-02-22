
import {ThemeProvider} from 'styled-components'
import theme from './style/theme'

import { Main } from "./components/Main"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { Home } from "./page/Home"
import { Room } from "./page/Room"

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Main>
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room" element={<Room/>} />
            </Routes>
          </AuthContextProvider>
        </Router>
        
      </Main>
    </ThemeProvider>
  )
}

export default App
