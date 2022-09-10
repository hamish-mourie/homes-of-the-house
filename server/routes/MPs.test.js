import request from 'supertest'

import server from '../server'
import { getMPs } from '../db/db'

jest.mock('../db/db')

describe('GET /api/v1/MPs', () => {
  it('responds with MPs array on getMPs success', () => {
    getMPs.mockImplementation(() =>
      Promise.resolve([
        { id: 1, name: 'test 1', price: 1.23, mfg: 'Test 1 Inc.', inStock: 4 },
        { id: 2, name: 'test 2', price: 45.67, mfg: 'Test 2 Inc.', inStock: 0 },
        {
          id: 3,
          name: 'test 3',
          price: 890.12,
          mfg: 'Test 3 Inc.',
          inStock: 8,
        },
      ])
    )
    return request(server)
      .get('/api/v1/MPs')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(3)
        expect(res.body[1].price).toBe(45.67)
      })
  })
  it('responds with 500 and error on getMPs rejection', () => {
    getMPs.mockImplementation(() => Promise.reject(new Error('mock DB error')))
    return request(server)
      .get('/api/v1/MPs')
      .expect(500)
      .then((err) => {
        expect(err.text).toBe('mock DB error')
      })
  })
})
