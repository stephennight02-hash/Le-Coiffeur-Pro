import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BottomTabBar() {
  const location = useLocation()

  const tabs = [
    { path: '/', label: 'Accueil', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { path: '/services', label: 'Tarifs', icon: 'M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z' }, // Scissors/Cut abstraction
    { path: '/galerie', label: 'Look', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { path: '/reservation', label: 'Réserver', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' }
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-fond/95 backdrop-blur-xl border-t border-white/5 pb-safe">
      <div className="flex justify-around items-center px-2 py-3">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path
          return (
            <Link 
              key={tab.path} 
              to={tab.path}
              className={`flex flex-col items-center justify-center w-full gap-1 transition-colors ${isActive ? 'text-cuivre' : 'text-texte-muted'}`}
            >
              <div className="relative">
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={isActive ? "2" : "1.5"}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                </svg>
                {isActive && (
                   <motion.div 
                     layoutId="bottom-tab-indicator"
                     className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cuivre"
                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   />
                )}
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-body ${isActive ? 'font-bold' : 'font-normal'}`}>
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
