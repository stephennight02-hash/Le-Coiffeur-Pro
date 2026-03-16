import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import BottomTabBar from './components/BottomTabBar'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Lookbook from './pages/Lookbook'
import Reservation from './pages/Reservation'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-fond overflow-hidden selection:bg-cuivre selection:text-white">
        <Header />
        
        <main className="flex-grow pt-24 md:pt-32 pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/galerie" element={<Lookbook />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
        
        <BottomTabBar />
      </div>
    </Router>
  )
}

export default App
