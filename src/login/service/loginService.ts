import { LoginBody } from '../tLogin'

const LOGIN_PATH = '/login'

export const login = (body: LoginBody) => {
  //return appAxios.post(LOGIN_PATH, body)

  const userMock = {
    username: body.user,
  }
  return Promise.resolve({
    message: 'OK!',
    httpCode: 200,
    response: userMock,
  })
}
