// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const widgetUrl = '/api/v1/widgets/'

export function getWidgets() {
  return request.get('/api/v1/widgets').then((res) => {
    return res.body
  })
}

export function addWidget(widget) {
  return request
    .post('/api/v1/widgets')
    .send(widget)
    .then((res) => {
      if (res.status === 200) {
        return res.body
      } else {
        throw new Error('post not saved')
      }
    })
}
