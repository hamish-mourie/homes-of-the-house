import React, { useState, useEffect } from 'react'
import { getWidgets } from '../apiClient'
import { Routes, Route } from 'react-router-dom'

import AddWidget from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState([])

  function reloadWidgets() {
    getWidgets()
      .then((result) => {
        setWidgets(result)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    getWidgets()
      .then((result) => {
        setWidgets(result)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(({ id, inStock, mfg, name, price }) => {
          return (
            <li key={id}>
              Product Name: {name} In stock:{inStock} Price:{price} Made by:
              {mfg}
            </li>
          )
        })}
      </ul>
      <Routes>
        <Route path="/" element={<AddWidget reloadWidgets={reloadWidgets} />} />
      </Routes>
    </div>
  )
}

export default App
