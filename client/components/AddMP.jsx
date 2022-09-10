import React, { useState } from 'react'
import { addMP } from '../apiClient'

const initialFormData = {
  fullName: '',
  politicalParty: '',
  totalPropertiesOwned: '',
}

function addMPForm({ reloadMPs }) {
  const [form, setForm] = useState(initialFormData)

  function handleChange(event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addMP(form)
      .then(() => {
        reloadMPs(form)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div>
      <h1> Add New MP </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
          Name:{' '}
          <input
            id="fullName"
            onChange={handleChange}
            value={form.fullName}
            name="fullName"
          />
        </label>
        <label htmlFor="politicalParty">
          Political Party:{' '}
          <input
            id="politicalParty"
            onChange={handleChange}
            value={form.politicalParty}
            name="politicalParty"
          />
        </label>
        <label htmlFor="totalPropertiesOwned">
          Total Properties Owned:{' '}
          <input
            id="totalPropertiesOwned"
            onChange={handleChange}
            value={form.totalPropertiesOwned}
            name="totalPropertiesOwned"
          />
        </label>
        <button>Add MP</button>
      </form>
    </div>
  )
}

export default addMPForm
