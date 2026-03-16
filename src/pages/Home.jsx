import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="w-full">
      {/* ✂️ HERO SECTION */}
      <section className="relative h-[85svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593702288056-b84746f33d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Barber Shop Interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fond/40 via-fond/80 to-fond"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-cuivre font-bold tracking-[0.3em] uppercase mb-6 block text-sm md:text-base"
          >
            Studio Ciseaux & Lames
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-texte font-black uppercase tracking-widest mb-8 leading-[0.9]"
          >
            L'Art <br/>
            <span className="font-light italic text-texte-muted">de la</span> <br className="md:hidden"/>
            Coupe
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/reservation">
              <Button size="lg">Prendre Rendez-vous</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🖋️ PRESENTATION SECTION (Asymmetric) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-fond relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-texte">
              L'Excellence <br/> <span className="text-cuivre font-light italic">au Millimètre</span>
            </h2>
            <div className="w-16 h-[1px] bg-cuivre mb-8"></div>
            <p className="font-body text-texte-muted text-lg leading-relaxed mb-6">
              Fondé sur la passion du détail et le respect des traditions, notre studio offre une expérience de coiffure et de barbier sur-mesure. Nous ne faisons pas que couper des cheveux, nous sculptons votre identité.
            </p>
            <p className="font-body text-texte-muted text-lg leading-relaxed mb-10">
              Chaque coup de ciseaux est pensé, chaque lame est maîtrisée pour révéler votre véritable prestance. Entrez, détendez-vous, et laissez nos experts opérer.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-cuivre font-body font-bold uppercase tracking-widest text-sm hover:text-cuivre-light transition-colors group">
              Découvrir nos tarifs
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Asymmetric Imagery */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative aspect-[3/4] md:aspect-auto md:h-[700px] w-full"
          >
             <div className="absolute top-0 right-0 w-4/5 h-4/5 md:w-3/4 md:h-3/4 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1520338661084-ce39b4b0e3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Detail Coupe" className="w-full h-full object-cover" />
             </div>
             <div className="absolute bottom-0 left-0 w-2/3 h-1/2 overflow-hidden rounded-sm shadow-2xl border-4 border-fond">
                <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Outils Barbier" className="w-full h-full object-cover" />
             </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
