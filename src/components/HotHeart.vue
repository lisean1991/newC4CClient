<template>
  <div class="big">
      <div id="heart" class="left"></div>
      <div id="heart" class="right"></div>
      <div id="heart" class="bottom"></div>
  </div>
</template>

<script>
// import Loader from 'vue-spinner/src/BeatLoader';
export default {
  name: 'HotHeart'
};
</script>

<style type="text/css">
.big {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    animation: heartAnimation 0.7s linear 0s infinite;
}
.big #heart {
    margin: 5px 0;
    width: 100%;
    height: 100%;
    background-color: #FF0606;
    position: absolute;
}
.left,.right {
    border-radius: 100px 100px 0 0;
    box-shadow: 0px 0px 20px #FD0707;
}
.bottom {
    box-shadow: 0px 0px 20px #FD0707;
}
.left {
    transform: translate(-50px,150px) rotate(-45deg);
}
.right {
    transform: translate(50px,150px) rotate(45deg);
}
.bottom {
    transform: translate(0,214px) rotate(45deg) scale(.9,.9)
}

@keyframes heartAnimation{
    form {
            transform: scale(0.8,0.8);
    }
    to {
            transform: scale(1.3,1.3);
    }
}
</style>
