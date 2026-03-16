import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const tarifsHommes = [
  { nom: 'Coupe Ciseaux / Tondeuse', prix: '30€' },
  { nom: 'Taille de Barbe Traditionnelle', prix: '25€' },
  { nom: 'Formule Complète (Coupe + Barbe)', prix: '50€' },
  { nom: 'Soin Visage Express', prix: '20€' },
  { nom: 'Coloration / Camouflage', prix: 'dès 40€' },
  { nom: 'Traçage Contours', prix: '15€' },
]

const tarifsFemmes = [
  { nom: 'Coupe & Brushing', prix: '65€' },
  { nom: 'Coloration Racines', prix: '45€' },
  { nom: 'Balayage Signature', prix: 'dès 110€' },
  { nom: 'Soin Profond Kératine', prix: '80€' },
  { nom: 'Chignon / Coiffure Étude', prix: '60€' },
  { nom: 'Coupe Transformation', prix: '85€' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('hommes')

  const currentList = activeTab === 'hommes' ? tarifsHommes : tarifsFemmes

  return (
    <div className="px-6 md:px-12 py-12 md:py-24 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-texte mb-6 uppercase tracking-widest">
          Nos <span className="text-cuivre font-light italic">Tarifs</span>
        </h1>
        <p className="font-body text-texte-muted text-lg max-w-2xl mx-auto">
          Découvrez notre carte de prestations. Chaque service inclut un diagnostic personnalisé et un moment de détente avec boisson offerte.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 md:gap-8 mb-16">
        <button 
          onClick={() => setActiveTab('hommes')}
          className={`font-heading text-lg md:text-2xl tracking-widest uppercase transition-all pb-2 border-b-2 ${activeTab === 'hommes' ? 'text-cuivre border-cuivre' : 'text-texte-muted border-transparent hover:text-texte'}`}
        >
          Hommes & Barbe
        </button>
        <button 
          onClick={() => setActiveTab('femmes')}
          className={`font-heading text-lg md:text-2xl tracking-widest uppercase transition-all pb-2 border-b-2 ${activeTab === 'femmes' ? 'text-cuivre border-cuivre' : 'text-texte-muted border-transparent hover:text-texte'}`}
        >
          Femmes & Coloration
        </button>
      </div>

      {/* Pricing List */}
      <div className="bg-fond-light p-6 md:p-12 rounded-sm shadow-xl border border-white/5 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-cuivre/10 rounded-bl-full pointer-events-none"></div>

        <AnimatePresence mode="wait">
          <motion.ul 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            {currentList.map((item, index) => (
              <li key={index} className="flex items-end gap-4 text-base md:text-xl font-body">
                <span className="text-texte whitespace-nowrap">{item.nom}</span>
                <div className="flex-grow border-b-2 border-dashed border-texte-muted/30 mb-2"></div>
                <span className="text-cuivre font-bold whitespace-nowrap">{item.prix}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      {/* CTA Bottom */}
      <div className="mt-16 text-center">
        <Link to="/reservation">
          <Button size="lg" className="mx-auto">Prendre Rendez-vous</Button>
        </Link>
      </div>

    </div>
  )
}
