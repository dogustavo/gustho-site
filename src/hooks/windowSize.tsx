import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return windowWidth
}
