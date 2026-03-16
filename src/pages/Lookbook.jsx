import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Lookbook() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Fade cut', span: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Beard trim', span: 'col-span-1 row-span-1' },
    { src: '/img/womencolor.jpg', alt: 'Women color', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Styling', span: 'col-span-2 row-span-1 md:col-span-1 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Salon vibe', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Classic cut', span: 'col-span-1 row-span-2' },
    { src: '/img/toolshair.jpg', alt: 'Tools', span: 'col-span-1 row-span-1' },
  ]

  return (
    <div className="px-5 md:px-12 py-12 md:py-24 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-texte mb-6 uppercase tracking-widest">
          Notre <span className="text-cuivre font-light italic">Lookbook</span>
        </h1>
        <p className="font-body text-texte-muted text-lg max-w-2xl mx-auto">
          Découvrez nos dernières réalisations. Des coupes classiques aux transformations radicales, notre galerie reflète notre passion pour le détail.
        </p>
      </div>

      {/* Masonry Grid Simulation (Snap Scroll alternative for CSS Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            className={`relative rounded-sm overflow-hidden group ${img.span}`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay Cuivre au hover */}
            <div className="absolute inset-0 bg-cuivre/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="font-heading text-white tracking-widest uppercase font-bold text-sm md:text-base drop-shadow-md">
                Voir
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
         <p className="font-body text-texte-muted mb-8 italic">Inspiré ? Confiez-nous votre prochain style.</p>
         <Link to="/reservation">
           <Button size="lg" className="mx-auto">Prendre Rendez-vous</Button>
         </Link>
      </div>

    </div>
  )
}
