var itemId = getUrlParam('itemId'),
token = getUrlParam('token')
    skuId = getUrlParam('skuId')
var sign = MD5('itemId=' + itemId + '&token=' + token + '&key=' + globKey)
$.ajax({
  url: APP_URL_Y + '/api/user/iteminfo',
  type: 'GET',
  data: {
    itemId: itemId,
    token: token,
    sign: sign
  },
  dataType: 'json',
  success: function (res) {
    var desc = `<p class="desc_p">商品描述：${res.data.description}</p>`
    $('.desc').append(desc)
    for (var i = 0; i < res.data.itemDetailImgs.length; i++) {
      var imgsList = res.data.itemDetailImgs[i]
      var str=`<div class="itemDetailImgs_item"><img src="http://192.168.1.206:8010/img/${imgsList}" alt=""></div>`
      $('.itemDetailImgs').append(str)
    }
  },
  error: function (err) {
    console.log(err);
  }
})