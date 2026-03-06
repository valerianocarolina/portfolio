import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { AppRoutes } from './routes'
import { Footer } from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
