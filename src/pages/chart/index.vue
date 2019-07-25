<template>
  <div class="contain">
    <line-chart class="margin"></line-chart>
    <histogram class="margin"></histogram>
    <pie-chart class="margin"></pie-chart>
    <ring-chart class="margin"></ring-chart>
    <bar-chart class="margin"></bar-chart>
  </div>
</template>

<script>
/* eslint-disable */
import F2 from '@antv/f2/lib/index'
import interaction from '@antv/f2/lib/interaction'
import Histogram from './components/histogram'
import PieChart from './components/ pie_chart'
import ringChart from './components/ring_chart'
import barChart from './components/bar_chart'
import LineChart from './components/line_chart'

export default {
  name: 'Chart',
  components: {
    Histogram,
    PieChart,
    ringChart,
    barChart,
    LineChart
  }
}
</script>

<style lang="stylus" scoped>
.contain
  background-color: #eee;
  .margin
    margin-bottom: 10px;
</style>
