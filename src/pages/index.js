import Hero from '@/components/UI/Hero'
import Head  from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Head>
        <title>PC Builder</title>
        <meta name='description' content='This is PC Builder website'/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Hero/> 
      <div className='lg:mt-[100px] md:mt-[60px] mt-10'>
        <h1 className='lg:text-5xl md:text-4xl text-2xl text-center font-extrabold'>Featured Products</h1>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home
