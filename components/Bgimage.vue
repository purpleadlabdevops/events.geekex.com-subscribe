<template>
  <div class="image">
    <img class="image__circle" src="@/assets/img/bg-img.png">
    <img class="image__lines" src="@/assets/img/bg-lines.png">
    <img class="image__grafiti" src="@/assets/img/bg-grafiti.png">
  </div>
</template>

<style lang="scss" scoped>
.image{
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  &__circle{
    position: relative;
    z-index: 2;
    animation: circle 200s infinite;
    display: block;
    margin-left: auto;
    margin-right: auto;
    opacity: .4;
  }
  &__lines{
    position: absolute;
    left: 50%; top: 0;
    transform: translateX(-50%);
    z-index: 1;
    animation: lines 15s infinite;
    opacity: .4;
  }
  &__grafiti{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 3;
    transform: translateX(-50%) translateY(-50%);
  }
}
@keyframes circle {
  100%{transform: rotate(360deg)}
}
@keyframes lines {
  50%{transform: translateX(-50%) scale(.7)}
}
</style>