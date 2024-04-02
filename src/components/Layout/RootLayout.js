import React from 'react'
import Navbar from '../Shared/Navbar'

const RootLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>{children}</div>
    </div>
  )
}

export default RootLayout