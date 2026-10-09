import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const HOLD_MS = 400

export default function SplashScreen({ onComplete }) {
  const reduceMotion = useReducedMotion()

  const [show, setShow] = useState(true)
  const [count, setCount] = useState(0)

  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  /* Count up, then hand control back to the parent. */
  useEffect(() => {
    if (!show) {
      onCompleteRef.current?.()
      return
    }

    if (reduceMotion) {
      const t = setTimeout(() => {
        onCompleteRef.current?.()
        setShow(false)
      }, 900)
      return () => clearTimeout(t)
    }

    const id = setInterval(() => {
      setCount((p) => {
        if (p >= 100) {
          clearInterval(id)
          return 100
        }
        const increment = p < 60 ? 3 : p < 85 ? 2 : p < 95 ? 1 : 0.5
        return Math.min(p + increment, 100)
      })
    }, 30)

    return () => clearInterval(id)
  }, [show, reduceMotion])

  /* On 100%, mount the page underneath, then fade the splash away. */
  useEffect(() => {
    if (!show || count < 100) return
    const t = setTimeout(() => {
      onCompleteRef.current?.()
      setShow(false)
    }, HOLD_MS)
    return () => clearTimeout(t)
  }, [show, count])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050508' }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
              style={{ background: 'rgba(139, 92, 246, 0.2)' }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px]"
              style={{ background: 'rgba(6, 182, 212, 0.15)' }}
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full blur-[140px]"
              style={{ background: 'rgba(236, 72, 153, 0.12)' }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-8">
            <div className="mb-2 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-white">
                  Bharath
                </span>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="-mt-1"
              >
                <span className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-accent whitespace-nowrap">
                  Kumar Peddireddy
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 h-[2px] my-8 origin-center"
              style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)' }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full"
            >
              <div className="flex items-end justify-between mb-3">
                <span className="text-xs font-mono tracking-widest uppercase text-white/30">
                  Loading
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {Math.round(count)}
                  <span className="text-accent">%</span>
                </span>
              </div>

              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-[width] duration-75 ease-linear"
                  style={{
                    width: `${count}%`,
                    background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
