<template>
  <div class="starry-sky-bg">
    <div class="stars">
      <div
        v-for="(item, index) in starsCount"
        :key="index"
        class="star"
        ref="star"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueStarrySky",
  props: {
    starsCount: {
      type: [Number, String],
      default: () => 800,
    },
    distance: {
      type: [Number, String],
      default: () => 800,
    },
  },
  data() {
    return {
      // starsCount: 800, //星星数量
      // distance: 800, //间距
    };
  },
  mounted() {
    let _this = this;
    let starArr = _this.$refs.star;
    starArr.forEach((item) => {
      let speed = 0.2 + Math.random() * 1;
      let thisDistance = _this.distance + Math.random() * 300;
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() *
        360}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`;
    });
  },
};
</script>

<style scoped>
.starry-sky-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #75517d,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}

.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: fixed;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 66s infinite linear;
  bottom: 0;
  z-index: -99;
}

.star {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: fixed;
  top: 0px;
  left: 0;
  backface-visibility: hidden;
}
</style>
