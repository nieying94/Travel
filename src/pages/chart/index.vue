<template>
  <div>
    <canvas id="myChart" width="400" height="260"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
import F2 from '@antv/f2'
import Core from '@antv/f2/lib/core'
import interval from '@antv/f2/lib/geom/interval'

export default {
  neme: 'Chart',
  data () {
    return {
      data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
    }
  },
  methods: {
    drawChart () {
      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })
      chart.source(this.data)
      chart.interval().position('genre*sold').color('genre')
      chart.render()
    }
  },
  mounted () {
    this.drawChart()
  }
}
</script>

<style lang="stylus" scoped>

</style>
