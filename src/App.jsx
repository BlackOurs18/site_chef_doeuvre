import { motion } from 'framer-motion'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Site Chef d'Oeuvre</h1>
    </motion.div>
  )
}
