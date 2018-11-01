<!-- template定义了组件的模板 -->
<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe605;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.doubleCity}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
// 导出一个对象，里面定义一个组件的名字
import { mapState, mapGetters } from 'Vuex'
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    1rem = html font-size = 50px
    .header
        display:flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: 0.64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-right
            min-width: 1.04rem
            padding:0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: .24rem
                margin-left: -.04rem
        .header-input
            flex: 1
            background: #fff
            height: 0.64rem
            line-height : .64rem
            margin-top : .12rem
            margin-left: .2rem
            padding-left: .2rem
            border-radius: .1rem
            color:#ccc

</style>
