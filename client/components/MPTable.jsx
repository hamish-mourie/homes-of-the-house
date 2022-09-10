import React from 'react'

function MPTable({ props }) {
  function handleSubmit(event) {
    event.preventDefault()
    let sortBy = event.target.name
    props.reloadMPs(sortBy)
  }

  return (
    <table className="table">
      <tbody>
        <tr className="row header blue">
          <th className="cell">
            Full Name{' '}
            <button name="fullName" onClick={handleSubmit}>
              Sort
            </button>
          </th>
          <th className="cell">
            Political Party{' '}
            <button name="politicalParty" onClick={handleSubmit}>
              Sort
            </button>
          </th>
          <th className="cell">
            Number of Properties Owned{' '}
            <button name="totalPropertiesOwned" onClick={handleSubmit}>
              Sort
            </button>
          </th>
        </tr>
        {props.MPs.map(
          ({ id, fullName, politicalParty, totalPropertiesOwned }) => {
            return (
              <tr key={id} className="row">
                <td className="cell">{fullName}</td>
                <td className="cell">{politicalParty}</td>
                <td className="cell">{totalPropertiesOwned}</td>
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default MPTable
