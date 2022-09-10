// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const MPUrl = '/api/v1/MPs/'

export function getMPs(sortBy) {
  return request.get(`/api/v1/MPs/${sortBy}`).then((res) => {
    return res.body
  })
}

export function addMP(MP) {
  return request
    .post('/api/v1/MPs')
    .send(MP)
    .then((res) => {
      if (res.status === 200) {
        return res.body
      } else {
        throw new Error('post not saved')
      }
    })
}
