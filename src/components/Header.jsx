import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-fond/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-heading font-black text-2xl md:text-3xl text-texte tracking-widest uppercase">
            Studio<span className="text-cuivre font-light">C&L</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { path: '/', label: 'Le Salon' },
            { path: '/services', label: 'Prestations' },
            { path: '/galerie', label: 'Lookbook' },
          ].map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`font-body text-sm tracking-[0.2em] uppercase transition-colors hover:text-cuivre ${location.pathname === item.path ? 'text-cuivre font-bold' : 'text-texte-muted'}`}
            >
              {item.label}
            </Link>
          ))}
          
          <Link to="/reservation">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-cuivre text-[#111111] font-heading font-bold uppercase tracking-wider text-sm hover:bg-cuivre-light transition-colors"
            >
              Réserver
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Header elements (maybe just logo + booking button) */}
        <div className="md:hidden">
           <Link to="/reservation" className="text-cuivre font-heading font-bold uppercase text-xs tracking-widest border border-cuivre px-4 py-2 rounded-sm">
             Rdv
           </Link>
        </div>

      </div>
    </header>
  )
}
