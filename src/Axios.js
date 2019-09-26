import axios from 'axios'
// 使用方式：直接在 vue ： this.GlobalFunc.func_axios(url, param, func(){})

export default {

  /* func_axios */
  func_axios:function(url, type='GET', param=null, callback){

    /* GET 方法 */
    if (type.toUpperCase() === 'GET'){
      /* get方法 有参数 */
      if (param){
        axios.get(url,{params:param})
          .then(function (response) {
            console.log(response)
            callback(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      /* get方法 无参数 */
      else{
        axios.get(url)
          .then(function (response) {
            console.log(response)
            callback(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
    /* POST 方法 */
    else{
      alert('post方法')
    }
  },
  /* func_axios END*/
}
