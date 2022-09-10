import React, { useState, useEffect } from 'react'
import { getMPs } from '../apiClient'

import AddMP from './AddMP'
import MPTable from './MPTable'

function App() {
  const [MPs, setMPs] = useState([])

  function reloadMPs(sortBy) {
    getMPs(sortBy)
      .then((result) => {
        setMPs(result)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    getMPs('fullName')
      .then((result) => {
        setMPs(result)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div>
      <h1 className="center">Homes of the House</h1>
      <MPTable props={{ reloadMPs, MPs }} />
      <AddMP reloadMPs={reloadMPs} />
    </div>
  )
}

export default App
