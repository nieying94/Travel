<template>
  <div class="m-contain">
    <canvas id="histogram"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2/lib/index'

export default {
  name: 'Histogram',
  data () {
    return {
      histogramData: [
        { genre: 'gym-1', sold: 275 },
        { genre: 'gym-2', sold: 115 },
        { genre: 'gym-3', sold: 120 },
        { genre: 'gym-4', sold: 350 },
        { genre: 'gym-5', sold: 150 }
      ]
    }
  },
  methods: {
    drawHistogram () {
      const histogramChart = new F2.Chart({
        id: 'histogram',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })
      // 载入数据源
      histogramChart.source(this.histogramData)
      histogramChart.legend('genre', {
        position: 'top', // 图例显示位置
        align: 'center', // 图例对齐方式
        showTitle: false, // 是否显示图例标题
        marker (x, y, r, ctx) {
          ctx.lineWidth = 2
          ctx.strokeStyle = ctx.fillStyle
          ctx.moveTo(x - r - 3, y)
          ctx.lineTo(x + r + 3, y)
          ctx.stroke()
          ctx.arc(x, y, r, 0, Math.PI * 2, false)
          ctx.fill()
        },
        onClick: ev => {
          console.log(ev)
        }
      })
      // 创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      histogramChart.interval().position('genre*sold').color('genre', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864'])
      // 渲染图表
      histogramChart.render()
    }
  },
  mounted () {
    this.drawHistogram()
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
