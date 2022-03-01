
import {ThemeProvider} from 'styled-components'
import theme from './style/theme'

import { Main } from "./components/Main"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { Home } from "./page/Home"
import { Room } from "./page/Room"
import { Error } from './page/Error'

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Main>
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room" element={<Room/>} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AuthContextProvider>
        </Router>
        
      </Main>
    </ThemeProvider>
  )
}

export default App
