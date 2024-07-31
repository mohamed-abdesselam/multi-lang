'use client'

import { useState } from "react"
import useTranslation from "@/hooks/useTranslation"

const page = () => {
  const [count, setCount] = useState(0)
  // const { t } = useTranslation('About');
  const { t } = useTranslation('About');

  const handleIncrese = () => {
    setCount(prev => prev+1)
  }

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <p>You clicked {count} times</p>
      <button className="border px-2 py-1 rounded-md shadow mt-2" onClick={handleIncrese}>plus +</button>
    </div>
  )
}

export default page