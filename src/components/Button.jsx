import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

export default function Button({ children, onClick, href, primary = true, className = '', size = 'md', type = "button" }) {
  const baseClasses = "font-heading font-bold tracking-widest uppercase rounded-sm flex items-center justify-center transition-all duration-300 relative overflow-hidden group"
  
  const sizeClasses = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm md:text-base",
    lg: "px-10 py-5 text-base md:text-lg"
  }

  const roleClasses = primary 
    ? "bg-cuivre text-[#111111] hover:bg-cuivre-light shadow-[0_4px_15px_rgba(200,121,65,0.2)] hover:shadow-[0_0_20px_rgba(200,121,65,0.4)]"
    : "bg-transparent text-cuivre border border-cuivre hover:bg-cuivre/10"

  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${roleClasses} ${className}`

  const motionProps = {
    whileTap: { scale: 0.95 },
    className: finalClasses
  }

  if (href) {
    if (href.startsWith('http')) {
       return (
         <motion.a href={href} target="_blank" rel="noreferrer" {...motionProps}>
           {children}
         </motion.a>
       )
    }
    return (
      <MotionLink to={href} {...motionProps}>
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
