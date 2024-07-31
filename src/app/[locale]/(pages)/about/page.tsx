'use client'

import { useState } from "react"
import useTranslation from "@/hooks/useTranslation"

const About = () => { // Renamed from 'About' to 'About'
  const [count, setCount] = useState(0)
  const { t } = useTranslation('About');

  const handleIncrease = () => { // Corrected spelling from 'handleIncrese' to 'handleIncrease'
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <p>You clicked {count} times</p>
      <button className="border px-2 py-1 rounded-md shadow mt-2" onClick={handleIncrease}>plus +</button>
    </div>
  )
}

export default About
