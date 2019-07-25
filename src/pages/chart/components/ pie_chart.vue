<template>
  <div class="m-contain">
    <canvas id="pie"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2/lib/index'

export default {
  name: 'PieChart',
  data () {
    return {
      pieMap: {
        '芳华': '40%',
        '妖猫传': '20%',
        '机器之血': '18%',
        '心理罪': '15%',
        '寻梦环游记': '5%',
        '其他': '2%'
      },
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
    drawPieChart () {
      const pieChart = new F2.Chart({
        id: 'pie',
        pixelRatio: window.devicePixelRatio
      })
      pieChart.source(this.pieData, {
        percent: {
          formatter: function formatter (val) {
            return val * 100 + '%'
          }
        }
      })
      pieChart.legend({
        position: 'right',
        itemFormatter: (val) => {
          return val + '  ' + this.pieMap[val]
        }
      })
      pieChart.tooltip(false)
      pieChart.coord('polar', {
        transposed: true,
        radius: 0.85
      })
      pieChart.axis(false)
      pieChart.interval().position('a*percent').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
        lineWidth: 0.5,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      }).animate({
        appear: {
          duration: 1200,
          easing: 'bounceOut'
        }
      })
      pieChart.render()
    }
  },
  mounted () {
    this.drawPieChart()
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
