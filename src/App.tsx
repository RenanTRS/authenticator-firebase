import { Main } from "./components/Main"
import { Home } from "./page/Home"
import theme from './style/theme'
import {ThemeProvider} from 'styled-components'
function App() {

  return (

    <ThemeProvider theme={theme}>
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  )
}

export default App
