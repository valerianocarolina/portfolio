import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { AppRoutes } from './routes'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
