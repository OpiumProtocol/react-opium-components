import { useState, useEffect, useRef } from 'react'
import { calculateIncreaseDomain, checkIsMobile } from './helpers'

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export const objectsEqual = (items: any, prevItems: any) => {
  return JSON.stringify(items) === JSON.stringify(prevItems)
}

export const useMobile = () => {
  const [isMobile, setMobile] = useState(false)
  const [mobileOrientation, setMobileOrientation] = useState<number | null | string>(0)
  const [dimension, setDimension] = useState<{width: number, height: number}>({ width: 0, height: 0 })

  const checkMobileOrientation = () => {
    // @ts-ignore
    let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation

    if (orientation === 'landscape-primary') {
      // horizontal
      setMobileOrientation(90)
    } else if (orientation === 'landscape-secondary') {
      // upsidedown
      setMobileOrientation(180)
    } else if (orientation === 'portrait-secondary' || orientation === 'portrait-primary') {
      // portrait
      setMobileOrientation(0)
    } else if (orientation === undefined) {
      // undefined
      setMobileOrientation(null)
    }
  }
  
  const orientationChangeListener = (event: any) => {
    setMobileOrientation(event.target.screen.orientation.angle)
  }

  const checkDeviceDimensions = () => {
    setDimension({
      width: (window.innerWidth > 0) ? window.innerWidth : screen.width,
      height: (window.innerHeight > 0) ? window.innerHeight : screen.height
    })
  }

  useEffect(() => {
    setMobile(checkIsMobile())

    window.addEventListener('resize', checkDeviceDimensions)
    window.addEventListener('orientationchange', orientationChangeListener)

    checkDeviceDimensions()
    checkMobileOrientation()

    return () => {
      window.removeEventListener('resize', checkDeviceDimensions)
      window.removeEventListener('orientationchange', orientationChangeListener)
    }
  }, [])

  return { isMobile, mobileOrientation, ...dimension }
}

export const useDomainY = (domainY: (string | number)[], increaseDomainY?: number) => {
  const [domainAxisY, setDomainAxisY] = useState<(string | number)[]>(domainY)

  useEffect(() => {
    const domainValue: number[] | null = (increaseDomainY && (domainY.every((i: any) => typeof i == 'number')))
      ? calculateIncreaseDomain(domainY as number[], increaseDomainY) 
      : null
    domainValue ? setDomainAxisY(domainValue) : setDomainAxisY(domainY)
  }, [])

  return domainAxisY as string[] | number[]
}
