<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottem"
        v-for= "item of recommendList"
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
  name: 'HomeWeeday',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
        title: '北京野生动物园',
        desc: '看熊猫看大象看企鹅'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '北京野生动物园',
        desc: '看熊猫看大象看企鹅'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
        title: '北京野生动物园',
        desc: '看熊猫看大象看企鹅'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
  margin-top: .2rem
.item-img-wrapper
  height: 0
  overflow: hidden
  padding-bottom: 34%
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
