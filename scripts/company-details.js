var companyId = getUrlParam('companyId'),
token = getUrlParam('token')
var sign = MD5('companyId=' + companyId + '&token=' + token + '&key=' + globKey)
$.ajax({
  url: APP_URL_Y + '/api/user/company/info',
  type: 'GET',
  data: {
    companyId: companyId,
    token: token,
    sign: sign
  },
  dataType: 'json',
  success: function (res) {
    var desc = `<p class="desc_p">商品描述：${res.data.shop.description}</p>`
    $('.desc').append(desc)
    for (var i = 0; i < res.data.itemDetailImgs.length; i++) {
      var imgsList = res.data.shop.itemDetailImgs[i]
      var str=`<div class="itemDetailImgs_item"><img src="http://192.168.1.206:8010/img/${imgsList}" alt=""></div>`
      $('.itemDetailImgs').append(str)
    }
  },
  error: function (err) {
    console.log(err);
  }
})