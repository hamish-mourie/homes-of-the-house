const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getMPs', () => {
  it('returns the correct MPs array', () => {
    return db.getMPs(testDb).then((MPs) => {
      expect(MPs).toHaveLength(3)
      expect(MPs[0]).toHaveProperty('mfg')
      expect(MPs[1].inStock).toBe(8)
    })
  })
})
