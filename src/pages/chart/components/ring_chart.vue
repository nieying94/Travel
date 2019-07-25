<template>
  <div class="m-contain">
    <canvas id="ring"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2/lib/index'
// import interaction from '@antv/f2/lib/interaction'

export default {
  name: 'ringChart',
  data () {
    return {
      pieData: [{
        name: '芳华',
        percent: 0.4,
        a: '1'
      }, {
        name: '妖猫传',
        percent: 0.2,
        a: '1'
      }, {
        name: '机器之血',
        percent: 0.18,
        a: '1'
      }, {
        name: '心理罪',
        percent: 0.15,
        a: '1'
      }, {
        name: '寻梦环游记',
        percent: 0.05,
        a: '1'
      }, {
        name: '其他',
        percent: 0.02,
        a: '1'
      }]
    }
  },
  methods: {
    drawRingChart () {
      const ringChart = new F2.Chart({
        id: 'ring',
        pixelRatio: window.devicePixelRatio
      })
      ringChart.source(this.pieData, {
        percent: {
          formatter: function formatter (val) {
            return val * 100 + '%'
          }
        }
      })
      ringChart.legend({
        position: 'right',
        marker: 'square'
      })
      ringChart.tooltip(false)
      ringChart.coord('polar', {
        transposed: true,
        radius: 0.85,
        innerRadius: 0.618
      })
      ringChart.axis(false)
      ringChart.interval().position('a*percent').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      })
      ringChart.guide().html({
        position: ['50%', '50%'],
        html: '<div style="text-align: center;width: 100px;height: 72px;vertical-align: middle;">' + '<p id="number" style="font-size: 28px;margin: 10px 10px 5px;font-weight: bold;"></p>' + '<p id="name" style="font-size: 12px;margin: 0;"></p>' + '</div>'
      })
      ringChart.render()
      ringChart.interaction('pie-select', {
        animate: {
          duration: 300,
          easing: 'backOut'
        },
        defaultSelected: {
          name: '机器之血',
          percent: 0.18,
          a: '1'
        },
        onEnd: (ev) => {
          let shape = ev.shape
          let data = ev.data
          let shapeInfo = ev.shapeInfo
          let selected = ev.selected
          if (shape) {
            if (selected) {
              document.getElementById('number').color = shapeInfo.color
              document.getElementById('number').innerText = data.percent * 100 + '%'
              document.getElementById('name').innerText = data.name
            } else {
              document.getElementById('number').innerText = ''
              document.getElementById('name').innerText = ''
            }
          }
        }
      })
    }
  },
  mounted () {
    this.drawRingChart()
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
