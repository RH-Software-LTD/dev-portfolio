import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default Home
