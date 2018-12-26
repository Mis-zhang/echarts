let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 20 + 'px';


var companyId = getUrlParam('companyId'),
token = getUrlParam('token')

var monthly_turnover = MD5('companyId=' + companyId + '&token=' + token + '&key=' + globKey)
// var companyId = '19',
  // token = 'e11e3091-503e-4d71-bb15-d18d7b103318'

$.ajax({
  url: APP_URL_S + '/app/funds/chart',
  type: 'GET',
  data: {
    companyId: companyId,
    token: token,
    sign: monthly_turnover
  },
  dataType: 'json',
  success: function (res) {
    console.log(res.data);
    var ECHARTS_KEY = Object.keys(res.data.map)
    var ECHARTS_VALUE = []
    for (var key in res.data.map) {
      ECHARTS_VALUE.push(res.data.map[key])
    }
    var myChart = echarts.init(document.getElementById('_top'));
    var option = {
      title: {
        text: '近三个月交易额',
        textStyle: {
          color: '#4d4d4d'
        },
        padding: [0, 0, 0, 0]
      },
      tooltip: {
        show: true,
        trigger: 'item',
        axisPointer: {
          type: 'shadow',
          axis: 'auto',

        },
        textStyle: {
          color: "#fff",
        },
      },
      grid: {
        show: false,
        top: 50,
        containLabel: false,
        axisPointer: {
          type: 'line'
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          textStyle: {
            color: '#666',
          },
        }
      },
      xAxis: {
        show: true,
        position: 'bottom',
        offset: 0,
        type: 'category',
        name: '',
        nameLocation: 'end',
        nameTextStyle: {
          color: "#333",
        },
        nameGap: 15,
        axisLine: {
          show: true,
          symbol: ['none'],
          symbolSize: [8, 8],
          symbolOffset: [0, 7],
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid',
          },
        },
        axisTick: {
          show: false,
          inside: true,
          lengt: 3,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        axisLabel: {
          show: true,
          inside: false,
          rotate: 0,
          margin: 5,
          color: '#333',
          fontSize: 14,
        },
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        data: ECHARTS_KEY,
      },
      yAxis: {
        show: true,
        position: 'left',
        offset: 0,
        type: 'value',
        name: '销量',
        nameLocation: 'end',
        nameTextStyle: {
          color: "#fff",
        },
        nameGap: 15,
        axisLine: {
          show: false,
          symbol: ['none', 'arrow'],
          symbolSize: [8, 8],
          symbolOffset: [0, 7],
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid',
          },
        },
        axisTick: {
          show: false,
          inside: true,
          lengt: 3,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        axisLabel: {
          show: true,
          inside: false,
          rotate: 0,
          margin: 8,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#898a8e',
            width: 1,
            type: 'solid',
          },
        },
        splitArea: {
          show: false,
        }
      },
      dataZoom: [{
        type: 'inside',
        show: false,
        realtime: true,
        start: 0,
        end: 4,
        zoomOnMouseWheel: false
      }],
      series: [{
        name: '销量',
        type: 'bar',
        legendHoverLink: true,
        label: {
          show: true,
          position: 'top',
          rotate: 0,
          color: '#898a8e',
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [{
                  offset: 0,
                  color: '#95c3f1'
                },
                {
                  offset: 1,
                  color: '#458acb'
                }
              ])
          },
          barBorderRadius: [0, 0, 0, 0],
        },
        barWidth: '20',
        barCategoryGap: '10%',
        data: ECHARTS_VALUE
      }]
    };
    myChart.setOption(option);
  },
  error: function (err) {
    console.log(err);
  }
})