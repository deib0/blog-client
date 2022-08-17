import axios from 'axios'
import { Message } from 'element-ui'
// 设置默认内容格式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 设置基础路径
axios.defaults.baseURL = '//blog-server.hunger-valley.com'

window.request = request

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
    }
    // 判断请求类型
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    // 如果有 token，放到请求头中
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }
    // 处理 response 返回的成果结果和失败结果
    axios(option).then(res => {
      console.log(res.data)
      if(res.data.status === 'ok') {
        // 把 token 存到 localStorage
        if(res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')   //请求出错时toast展示报错提示
      reject({ msg: '网络异常' })
    })
  })
}
// 示范调用
// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data)
//   })