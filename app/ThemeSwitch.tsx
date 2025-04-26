"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { CiCloudSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
        <button onClick={() => setTheme('light')} title='light mode'><CiCloudSun size={50} className="icon"></CiCloudSun></button>
        <button onClick={() => setTheme('dark')} title='dark mode'><CiCloudMoon size={50} className="icon"></CiCloudMoon></button>
    </div>
  )
}

export default ThemeSwitch