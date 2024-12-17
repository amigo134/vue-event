// 封装的是具体的接口请求方法
// 注意：每个方法只负责请求一个url地址
import request from '@/utils/request' // 引入自定义axios函数
// 导出接口方法，为了在逻辑页面引入后调用
export const registerAPI = () => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'lidongxu01',
      password: '666666',
      repassword: '666666'
    }
  })
}
