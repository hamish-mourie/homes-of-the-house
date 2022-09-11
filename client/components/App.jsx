import React, { useState, useEffect } from 'react'
import { getMPs, getPartyHouses } from '../apiClient'

import AddMP from './AddMP'
import MPTable from './MPTable'
import BarChart from './BarChart'
import PieChart from './PieChart'

function App() {
  const [MPs, setMPs] = useState([])
  const [chartData, setChartData] = useState('')
  const [pieChartData, setPieChartData] = useState('')
  const [pieChartCapitaData, setPieChartCapitaData] = useState('')

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
    getMPs('totalPropertiesOwned')
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

  useEffect(() => {
    getPartyHouses()
      .then((result) => {
        let partyHouseTotalsInitial = {
          National: 0,
          Labour: 0,
          Māori: 0,
          ACT: 0,
          Independent: 0,
          Green: 0,
        }
        result.forEach((element) => {
          partyHouseTotalsInitial[element.politicalParty] =
            partyHouseTotalsInitial[element.politicalParty] +
            element.totalPropertiesOwned
        })

        let backgroundColorData = []
        Object.keys(partyHouseTotalsInitial).forEach((element) => {
          if (element === 'National') {
            backgroundColorData.push('blue')
          } else if (element === 'Labour') {
            backgroundColorData.push('red')
          } else if (element === 'Green') {
            backgroundColorData.push('green')
          } else if (element === 'Māori') {
            backgroundColorData.push('black')
          } else if (element === 'ACT') {
            backgroundColorData.push('yellow')
          } else {
            backgroundColorData.push('gray')
          }
        })

        setPieChartData({
          labels: Object.keys(partyHouseTotalsInitial),
          datasets: [
            {
              label: 'Number of Properties Owned',
              data: Object.values(partyHouseTotalsInitial),
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

  useEffect(() => {
    getPartyHouses()
      .then((result) => {
        let partyHouseTotalsInitial = {
          National: 0,
          Labour: 0,
          Māori: 0,
          ACT: 0,
          Independent: 0,
          Green: 0,
        }
        result.forEach((element) => {
          partyHouseTotalsInitial[element.politicalParty] =
            partyHouseTotalsInitial[element.politicalParty] +
            element.totalPropertiesOwned
        })
        let partyMemberTotalsInitial = {
          National: 0,
          Labour: 0,
          Māori: 0,
          ACT: 0,
          Independent: 0,
          Green: 0,
        }
        result.forEach((element) => {
          partyMemberTotalsInitial[element.politicalParty] =
            partyMemberTotalsInitial[element.politicalParty] + 1
        })
        let partyHousesPerCapita = {
          National:
            partyHouseTotalsInitial.National /
            partyMemberTotalsInitial.National,
          Labour:
            partyHouseTotalsInitial.Labour / partyMemberTotalsInitial.Labour,
          Māori: partyHouseTotalsInitial.Māori / partyMemberTotalsInitial.Māori,
          ACT: partyHouseTotalsInitial.ACT / partyMemberTotalsInitial.ACT,
          Independent:
            partyHouseTotalsInitial.Independent /
            partyMemberTotalsInitial.Independent,
          Green: partyHouseTotalsInitial.Green / partyMemberTotalsInitial.Green,
        }

        let backgroundColorData = []
        Object.keys(partyHousesPerCapita).forEach((element) => {
          if (element === 'National') {
            backgroundColorData.push('blue')
          } else if (element === 'Labour') {
            backgroundColorData.push('red')
          } else if (element === 'Green') {
            backgroundColorData.push('green')
          } else if (element === 'Māori') {
            backgroundColorData.push('black')
          } else if (element === 'ACT') {
            backgroundColorData.push('yellow')
          } else {
            backgroundColorData.push('gray')
          }
        })

        setPieChartCapitaData({
          labels: Object.keys(partyHousesPerCapita),
          datasets: [
            {
              label: 'Average Number of Properties Owned Per MP',
              data: Object.values(partyHousesPerCapita),
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
    <div className="white-bg">
      <h1 className="center top-padding">Homes of the House</h1>
      <h2 className="center">
        <a
          href="https://www.parliament.nz/en/mps-and-electorates/members-financial-interests/mps-financial-interests/2022-current-register-of-members-pecuniary-and-other-specified-interests/"
          target="_blank"
          rel="noreferrer"
        >
          Data sourced from Parliament.nz
        </a>
      </h2>
      {chartData !== '' && pieChartData !== '' && pieChartCapitaData !== '' && (
        <>
          <div className="page-wrapper">
            <div className="split-row">
              <div className="split-column">
                <div className="two-graphs center">
                  <h1>Properties Owned</h1>
                  <h2>(By Party Affiliation)</h2>
                  <PieChart pieChartData={pieChartData} />
                </div>
              </div>
              <div className="split-column center">
                <div className="two-graphs2 center">
                  <h1>Properties Owned</h1>
                  <h1>Per Capita</h1>
                  <h2>(By Party Affiliation)</h2>
                  <BarChart chartData={pieChartCapitaData} />
                </div>
              </div>
            </div>
          </div>
          <div className="center bar-graph">
            <BarChart chartData={chartData} />
          </div>
        </>
      )}

      <MPTable props={{ reloadMPs, MPs }} />
      {/* <AddMP reloadMPs={reloadMPs} /> */}
    </div>
  )
}

export default App
