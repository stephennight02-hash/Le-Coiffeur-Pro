import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'

// Données Mockées
const coiffeurs = [
  { id: 1, nom: 'Thomas', role: 'Maître Barbier', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 2, nom: 'Sarah', role: 'Coloriste Expert', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 3, nom: 'Alex', role: 'Styliste Visagiste', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
]

const horaires = [
  { time: '09:00', dispo: true },
  { time: '09:30', dispo: true },
  { time: '10:00', dispo: false },
  { time: '10:30', dispo: true },
  { time: '11:00', dispo: false },
  { time: '11:30', dispo: false },
  { time: '14:00', dispo: true },
  { time: '14:30', dispo: true },
  { time: '15:00', dispo: true },
  { time: '15:30', dispo: false },
  { time: '16:00', dispo: true },
  { time: '17:00', dispo: true },
]

export default function Reservation() {
  const [step, setStep] = useState(1) // 1: Coiffeur, 2: Heure, 3: Confirmation
  const [selectedCoiffeur, setSelectedCoiffeur] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const handleCoiffeurSelect = (c) => {
    setSelectedCoiffeur(c)
    setTimeout(() => setStep(2), 300) // Petit délai pour l'effet visuel
  }

  const handleTimeSelect = (t) => {
    setSelectedTime(t)
    setTimeout(() => setStep(3), 300)
  }

  const resetForm = () => {
    setStep(1)
    setSelectedCoiffeur(null)
    setSelectedTime(null)
  }

  return (
    <div className="px-5 md:px-12 py-12 md:py-24 max-w-4xl mx-auto min-h-[70vh]">
      
      {/* Header Form */}
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-texte uppercase tracking-widest">
          Réservation <span className="text-cuivre font-light italic">Online</span>
        </h1>
        {step < 3 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <span className={`w-3 h-3 rounded-full transition-colors ${step >= 1 ? 'bg-cuivre' : 'bg-gray-700'}`}></span>
            <div className="w-12 h-px bg-gray-700"></div>
            <span className={`w-3 h-3 rounded-full transition-colors ${step >= 2 ? 'bg-cuivre' : 'bg-gray-700'}`}></span>
            <div className="w-12 h-px bg-gray-700"></div>
            <span className={`w-3 h-3 rounded-full transition-colors ${step >= 3 ? 'bg-cuivre' : 'bg-gray-700'}`}></span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        
        {/* ETAPE 1 : CHOIX COIFFEUR */}
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-heading text-2xl mb-10 text-texte-muted">1. Choisissez votre expert</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {coiffeurs.map(c => (
                <button 
                  key={c.id}
                  onClick={() => handleCoiffeurSelect(c)}
                  className={`flex flex-col items-center p-6 rounded-sm border transition-all duration-300 group
                    ${selectedCoiffeur?.id === c.id ? 'bg-cuivre/10 border-cuivre scale-105' : 'bg-fond-light border-white/5 hover:border-cuivre/50'}
                  `}
                >
                  <img src={c.img} alt={c.nom} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-cuivre/20 group-hover:border-cuivre transition-colors" />
                  <span className="font-heading font-bold tracking-wider text-texte text-xl mb-1">{c.nom}</span>
                  <span className="font-body text-texte-muted text-sm">{c.role}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ETAPE 2 : CHOIX HORAIRE */}
        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-heading text-2xl mb-4 text-texte-muted">2. Choisissez l'horaire</h2>
            <p className="font-body text-cuivre mb-10">Avec {selectedCoiffeur?.nom}</p>
            
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
              {horaires.map((h, i) => (
                <button 
                  key={i}
                  disabled={!h.dispo}
                  onClick={() => handleTimeSelect(h.time)}
                  className={`py-4 rounded-sm font-body font-bold text-lg transition-all
                    ${!h.dispo ? 'opacity-30 cursor-not-allowed bg-gray-900 text-gray-500 border border-gray-800' : 
                      selectedTime === h.time ? 'bg-cuivre text-[#111111] scale-105 shadow-[0_0_15px_rgba(200,121,65,0.4)]' : 
                      'bg-fond-light text-texte border border-white/10 hover:border-cuivre hover:text-cuivre'}
                  `}
                >
                  {h.time}
                </button>
              ))}
            </div>

            <button onClick={() => setStep(1)} className="mt-12 text-texte-muted underline font-body text-sm hover:text-texte">
              Retour au choix de l'expert
            </button>
          </motion.div>
        )}

        {/* ETAPE 3 : CONFIRMATION ANIMÉE */}
        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-cuivre/20 flex items-center justify-center mb-8 border border-cuivre"
            >
              <svg className="w-12 h-12 text-cuivre" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            
            <h2 className="font-heading text-4xl mb-4 text-texte">Rendez-vous Confirmé !</h2>
            <p className="font-body text-texte-muted text-lg mb-8 max-w-md">
              Votre créneau de <span className="text-cuivre font-bold">{selectedTime}</span> avec <span className="text-cuivre font-bold">{selectedCoiffeur?.nom}</span> a bien été réservé. Vous recevrez un SMS de rappel la veille.
            </p>

            <Button onClick={resetForm} primary={false}>Nouveau Rendez-vous</Button>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  )
}
