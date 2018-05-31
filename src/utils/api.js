//创建ajax请求
const makeRequest = ({
  url,
  method = 'GET',
  header = {},
  param = {},

}) => {
  if(typeof param !== 'object') {
    throw new Error('param参数必须是一个对象呦!!!')
  }
  if(typeof header !== 'object') {
    throw new Error('header参数必须是一个对象呦!!!')
  }
  if(!url) {
    throw new Error('必须要有请求url的呦!!!')
  }
  return new Promise((resolve,reject) => {
    wx.request({
      url: url,
      method: method,
      data: param,
      header: header,
      dataType: 'json',
      success: (res) => {
        resolve(res)
      },
      fail: (error) => {
        reject(error)
      },
      complete: () => {}
    })
  })
}
const APIREQUEST = {
  getMainInfo: () => {
    return makeRequest({
      url: 'http://api.zhituteam.com/api/index'
    })
  }
}

export default APIREQUEST
