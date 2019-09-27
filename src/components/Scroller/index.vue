<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function() {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true, //允许tap事件
      probeType: 1 //允许滑动事件函数，会截流
    });
    this.scroll=scroll;//将scroll变成全局变量
    scroll.on("scroll", pos => {
      //监听滑动事件
      this.handleToScroll(pos);
      
    });
    scroll.on("touchEnd", pos => {
      this.handleToTouchEnd(pos);
    });
  },
  methods:{
    toScrollTop(y){
      this.scroll.scrollTo(0,y);//better-scroll自带方法。scrollTo(0,y)表示在y轴上向下滑动y距离
    }
  }
  
};
</script>
<style scoped>
.wrapper {
  height: 100%;
}
</style>