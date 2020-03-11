const helloWorld = require('../../../http/helloWorld/controllers/helloWorld')

const req = {}
const res = {
  send: jest.fn()
}

beforeEach(() => {
  res.send.mockClear()
})

it('should respond with "Hello World"', () => {
  helloWorld(req, res)

  expect(res.send).toHaveBeenCalledWith('Hello World')
})
