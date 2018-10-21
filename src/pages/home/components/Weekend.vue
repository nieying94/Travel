<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottem"
        v-for= "item of list"
        :key="item.id"
        >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeeend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  height: 0
  overflow: hidden
  padding-bottom: 38%
  .item-img
    width: 100%
.item-info
  padding: 0.2rem
  min-width:0
  .item-title
    line-height:.50rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    font-size: .25rem
    margin-bottom: .1rem
    ellipsis()
</style>
