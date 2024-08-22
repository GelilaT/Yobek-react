import React from 'react'
import Navbar from '../components/Navbar'

const Mainlayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Mainlayout
