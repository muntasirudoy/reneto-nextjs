import { Header } from '@/components/layout/header'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Hero } from '@/components/sections/hero'
import { Process } from '@/components/sections/process'
import { Skills } from '@/components/sections/skills'
import { ThemeProvider } from '@/hooks/useTheme'
import ReactLenis from 'lenis/react'



export default function Home() {
  return (
    <>
      <ReactLenis root />
      <Hero />
      <Skills />
      <About />
      <Process />
      <Contact />

    </>
  )
}
