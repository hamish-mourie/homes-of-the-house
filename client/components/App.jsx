import React, { useState, useEffect } from 'react'
import { getMPs } from '../apiClient'

import AddMP from './AddMP'
import MPTable from './MPTable'
import BarChart from './BarChart'

function App() {
  const [MPs, setMPs] = useState([])
  const [chartData, setChartData] = useState('')

  function reloadMPs(sortBy) {
    getMPs(sortBy)
      .then((result) => {
        setMPs(result)
        let backgroundColorData = []
        result.forEach((element) => {
          if (element.politicalParty === 'National') {
            backgroundColorData.push('blue')
          } else if (element.politicalParty === 'Labour') {
            backgroundColorData.push('red')
          } else if (element.politicalParty === 'Green') {
            backgroundColorData.push('green')
          } else if (element.politicalParty === 'Māori') {
            backgroundColorData.push('black')
          } else if (element.politicalParty === 'ACT') {
            backgroundColorData.push('yellow')
          } else {
            backgroundColorData.push('gray')
          }
        })
        setChartData({
          labels: result.map((element) => {
            return element.fullName
          }),
          datasets: [
            {
              label: 'Number of Properties Owned',
              data: result.map((element) => {
                return element.totalPropertiesOwned
              }),
              backgroundColor: backgroundColorData,
              borderColor: 'black',
              borderWidth: 2,
            },
          ],
        })
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    getMPs('fullName')
      .then((result) => {
        setMPs(result)
        let backgroundColorData = []
        result.forEach((element) => {
          if (element.politicalParty === 'National') {
            backgroundColorData.push('blue')
          } else if (element.politicalParty === 'Labour') {
            backgroundColorData.push('red')
          } else if (element.politicalParty === 'Green') {
            backgroundColorData.push('green')
          } else if (element.politicalParty === 'Māori') {
            backgroundColorData.push('black')
          } else if (element.politicalParty === 'ACT') {
            backgroundColorData.push('yellow')
          } else {
            backgroundColorData.push('gray')
          }
        })
        setChartData({
          labels: result.map((element) => {
            return element.fullName
          }),
          datasets: [
            {
              label: 'Number of Properties Owned',
              data: result.map((element) => {
                return element.totalPropertiesOwned
              }),
              backgroundColor: backgroundColorData,
              borderColor: 'black',
              borderWidth: 2,
            },
          ],
        })
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div>
      <h1 className="center">Homes of the House</h1>
      <h2 className="center">
        <a
          href="https://www.parliament.nz/en/mps-and-electorates/members-financial-interests/mps-financial-interests/2022-current-register-of-members-pecuniary-and-other-specified-interests/"
          target="_blank"
          rel="noreferrer"
        >
          Data sourced from Parliament.nz
        </a>
      </h2>
      {chartData !== '' && (
        <div className="center graph">
          {console.log(chartData)}
          <BarChart chartData={chartData} />
        </div>
      )}

      <MPTable props={{ reloadMPs, MPs }} />
      <AddMP reloadMPs={reloadMPs} />
    </div>
  )
}

export default App
