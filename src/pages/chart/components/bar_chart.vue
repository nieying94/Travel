<template>
  <div class="m-contain">
    <canvas id="bar"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2/lib/index'
import _ from 'lodash'

export default {
  name: 'barChart',
  data () {
    return {
      barData: [{
        label: 'Mon.',
        type: 'series1',
        value: 2800
      }, {
        label: 'Mon.',
        type: 'series2',
        value: 2260
      }, {
        label: 'Tue.',
        type: 'series1',
        value: 1800
      }, {
        label: 'Tue.',
        type: 'series2',
        value: 1300
      }, {
        label: 'Wed.',
        type: 'series1',
        value: 950
      }, {
        label: 'Wed.',
        type: 'series2',
        value: 900
      }, {
        label: 'Thu.',
        type: 'series1',
        value: 500
      }, {
        label: 'Thu.',
        type: 'series2',
        value: 390
      }, {
        label: 'Fri.',
        type: 'series1',
        value: 170
      }, {
        label: 'Fri.',
        type: 'series2',
        value: 100
      }]
    }
  },
  methods: {
    drawBarChart () {
      let barChart = new F2.Chart({
        id: 'bar',
        pixelRatio: window.devicePixelRatio
      })
      barChart.source(this.barData.reverse(), {
        value: {
          tickInterval: 750
        }
      })
      barChart.coord({
        transposed: true
      })
      barChart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange (obj) {
          let legend = barChart.get('legendController').legends.top[0]
          let tooltipItems = obj.items
          let legendItems = legend.items
          let map = {}
          legendItems.map((item) => {
            map[item.name] = _.clone(item)
          })
          tooltipItems.map((item) => {
            let name = item.name
            let value = item.value
            if (map[name]) {
              map[name].value = value
            }
          })
          legend.setItems(Object.values(map))
        },
        onHide: function onHide () {
          var legend = barChart.get('legendController').legends.top[0]
          legend.setItems(barChart.getLegendItems().country)
        }
      })
      barChart.axis('label', {
        line: F2.Global._defaultAxis.line,
        grid: null
      })
      barChart.axis('value', {
        line: null,
        grid: F2.Global._defaultAxis.grid,
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
      barChart.interval().position('label*value').color('type').adjust({
        type: 'dodge',
        marginRatio: 1 / 32
      })
      barChart.render()
    }
  },
  mounted () {
    this.drawBarChart()
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
