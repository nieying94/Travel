<template>
  <div class="m-contain">
    <canvas id="line"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2/lib/index'

export default {
  name: 'LineChart',
  data () {
    return {
      lineData: [{
        date: '2017-06-05',
        value: 116
      }, {
        date: '2017-06-06',
        value: 129
      }, {
        date: '2017-06-07',
        value: 135
      }, {
        date: '2017-06-08',
        value: 86
      }, {
        date: '2017-06-09',
        value: 73
      }, {
        date: '2017-06-10',
        value: 85
      }, {
        date: '2017-06-11',
        value: 73
      }, {
        date: '2017-06-12',
        value: 68
      }, {
        date: '2017-06-13',
        value: 92
      }, {
        date: '2017-06-14',
        value: 130
      }, {
        date: '2017-06-15',
        value: 245
      }, {
        date: '2017-06-16',
        value: 139
      }, {
        date: '2017-06-17',
        value: 115
      }, {
        date: '2017-06-18',
        value: 111
      }, {
        date: '2017-06-19',
        value: 309
      }, {
        date: '2017-06-20',
        value: 206
      }, {
        date: '2017-06-21',
        value: 137
      }, {
        date: '2017-06-22',
        value: 128
      }, {
        date: '2017-06-23',
        value: 85
      }, {
        date: '2017-06-24',
        value: 94
      }, {
        date: '2017-06-25',
        value: 71
      }, {
        date: '2017-06-26',
        value: 106
      }, {
        date: '2017-06-27',
        value: 84
      }, {
        date: '2017-06-28',
        value: 93
      }, {
        date: '2017-06-29',
        value: 85
      }, {
        date: '2017-06-30',
        value: 73
      }, {
        date: '2017-07-01',
        value: 83
      }, {
        date: '2017-07-02',
        value: 125
      }, {
        date: '2017-07-03',
        value: 107
      }, {
        date: '2017-07-04',
        value: 82
      }, {
        date: '2017-07-05',
        value: 44
      }, {
        date: '2017-07-06',
        value: 72
      }, {
        date: '2017-07-07',
        value: 106
      }, {
        date: '2017-07-08',
        value: 107
      }, {
        date: '2017-07-09',
        value: 66
      }, {
        date: '2017-07-10',
        value: 91
      }, {
        date: '2017-07-11',
        value: 92
      }, {
        date: '2017-07-12',
        value: 113
      }, {
        date: '2017-07-13',
        value: 107
      }, {
        date: '2017-07-14',
        value: 131
      }, {
        date: '2017-07-15',
        value: 111
      }, {
        date: '2017-07-16',
        value: 64
      }, {
        date: '2017-07-17',
        value: 69
      }, {
        date: '2017-07-18',
        value: 88
      }, {
        date: '2017-07-19',
        value: 77
      }, {
        date: '2017-07-20',
        value: 83
      }, {
        date: '2017-07-21',
        value: 111
      }, {
        date: '2017-07-22',
        value: 57
      }, {
        date: '2017-07-23',
        value: 55
      }, {
        date: '2017-07-24',
        value: 60
      }]
    }
  },
  methods: {
    drawLineChart () {
      const lineChart = new F2.Chart({
        id: 'line',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })
      lineChart.source(this.lineData, {
        value: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          tickCount: 3,
          range: [0, 1]
        }
      })
      lineChart.tooltip({
        custom: true,
        showYTip: true,
        snap: true,
        showCrosshairs: true,
        showItemMarker: false,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        }
      })
      lineChart.axis('date', {
        label: (text, index, total) => {
          var textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      lineChart.line().position('date*value').shape('smooth')
      lineChart.point().position('date*value').shape('rect').style({
        stroke: '#fff',
        lineWidth: 1
      })
      lineChart.render()
    }
  },
  mounted () {
    this.drawLineChart()
  }
}
</script>

<style lang="stylus" scoped>
.m-contain
  height: 260px;
  background-color: white;
  >canvas
    width: 100%;
    height: 100%;
</style>
