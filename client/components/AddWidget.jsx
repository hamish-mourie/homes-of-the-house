import React, { useState } from 'react'
import { addWidget } from '../apiClient'

const initialFormData = {
  name: '',
  inStock: '',
  price: '',
  mfg: '',
}

function addWidgetForm({ reloadWidgets }) {
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
    addWidget(form)
      .then(() => {
        reloadWidgets(form)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div>
      <h1> Add New Widget </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{' '}
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </label>
        <label htmlFor="inStock">
          How many in stock:{' '}
          <input
            id="inStock"
            onChange={handleChange}
            value={form.inStock}
            name="inStock"
          />
        </label>
        <label htmlFor="price">
          Price:{' '}
          <input
            id="price"
            onChange={handleChange}
            value={form.price}
            name="price"
          />
        </label>
        <label htmlFor="mfg">
          Manufacturing:{' '}
          <input id="mfg" onChange={handleChange} value={form.mfg} name="mfg" />
        </label>
        <button>Add Widget</button>
      </form>
    </div>
  )
}

export default addWidgetForm
