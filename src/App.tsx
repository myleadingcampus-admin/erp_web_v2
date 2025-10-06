
import './App.css'
import AppRoutes from './routes'
import {ThemeProvider} from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
