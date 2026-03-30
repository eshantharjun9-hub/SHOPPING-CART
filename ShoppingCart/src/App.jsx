import { useState } from 'react'
import './App.css'
import React from 'react'
import Head from './Components/Head'
import InputBox from './Components/InputBox'
import Shopping from './Components/Shopping'

const App = () => {
  return (
    <>
      <div className='ipt-box'>
        <Head />
        <InputBox />
        <Shopping/>
      </div>
    </>
  )
}

export default App