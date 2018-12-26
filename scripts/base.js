 var APP_URL_S = 'http://192.168.1.206:8090/nft'  //测试url  杜帅  商家端
 // var APP_URL_Y = 'http://192.168.1.194:8063/pos'  //测试url  李钊  用户端
var APP_URL_Y = 'http://192.168.1.206:8090/nft'  

// var APP_URL_S = 'http://192.168.0.116:8090/nft'
// var APP_URL_Y = 'http://192.168.0.116:8090/nft'

  // var APP_URL_S = ''  //正式url  杜帅   商家端
  // var APP_URL_Y = ''  //正式url  李钊   用户端

  var globKey = 'YjU5YTA3NzEtMDI2MS00YzhiLTljM2ItYzE2MTljZDQwNDNhNGExYjEzZTUtYmIx'  

  
  function getUrlParam(params) {
    var reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
      return unescape(r[2])
    }
    return null;
  }

  function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() + ' '
    var h = date.getHours() + ':'
    var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
    var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
    return Y + M + D + h + m + s
  }

  function timestampToHuiTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() + ' '

    return Y + M + D
  }
