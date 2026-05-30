// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watches'

function App() {

  // const watches = [
  //   { id: 1, name: 'Apple Watch Series 9', price: 200 },
  //   { id: 2, name: 'Samsung Galaxy Watch 6', price: 180 },
  //   { id: 3, name: 'Xiaomi Watch S3', price: 120 },
  //   { id: 4, name: 'Huawei Watch GT 4', price: 150 }
  // ]

  const [watches, setWatches] = useState([])
  useEffect(() => {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch watch={watch}></Watch>)
      }
    </>
  )
}

export default App
