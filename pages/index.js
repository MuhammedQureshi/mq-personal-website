import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import AboutMe from '@/components/aboutme'
import Skills from '@/components/Skills'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammed Qureshi Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Hero heading='Software Developer' message='Welcome to my portfolio website showcasing my skills, projects, and passion for software development.'/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}
