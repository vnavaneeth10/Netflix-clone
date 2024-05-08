import { useState } from 'react'
import React from 'react'
import './App.css'
import { action, originals } from './urls'
import NavBar from './assets/Components/NavBar/NavBar'
import Banner from './assets/Components/Banner/Banner'
import RowPoster from './assets/Components/RowPoster/RowPoster'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPoster url={originals} title='Netflix Originals'/>
      <RowPoster url={action} title='Actions' isSmall/>
    </>
  )
}

export default App
