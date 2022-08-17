import request from '@/helpers/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}
//  对所有类型的数据请求直接调用
export default {
  register({ username, password }) {
    return request(URL.REGISTER, 'POST', { username, password })
  },

  login({ username, password }) {
    return request(URL.LOGIN, 'POST', { usernafme, password })
  },

  logout() {
    localStorage.removeItem('token')  //注销时删除jwttoken，下次请求没token服务端就认为未登陆
    return request(URL.LOGOUT)
  },

  getInfo() {
    return request(URL.GET_INFO)
  }
}