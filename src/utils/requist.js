import axios from 'axios';
// 创建axios实例
console.log(process.env)
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  // baseURL: 'api/', // api 的 base_url
  // timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
      if (config.method === 'post' && typeof config.data !== 'object' && !config.data.includes('=')) {
        config.headers['Content-Type'] = 'application/json'
      }
      if (localStorage.getItem('accessToken')) {
        config.headers['accessToken'] = localStorage.getItem('accessToken') // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      return config
    },
    error => {
      // Do something with request error
      // console.log(error) // for debug
      Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
      const res = response.data
      if (res.retCode !== 200) {
        //  -100007:Token 验证失败;
        if (res.retCode === -100007) {
         /* MessageBox.confirm(
              '你已被登出，可以取消继续留在该页面，或者重新登录',
              '确定登出',
              {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
              }
          ).then(() => {
            store.dispatch('FedLogOut').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          })*/
        } else {
          /*Message({
            message: res.retMsg,
            type: 'error',
          })*/
        }
        return response.data
      } else {
        return response.data
      }
    },
    error => {
      // console.log('err' + error) // for debug
      /*Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })*/
      return Promise.reject(error)
    }
)

export default service









