<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="less">
  .more-button {
      display: block;
      margin: .25555rem 0;
      height: 1.08695652rem;
      line-height: 1.08695652rem;
      text-align: center;
      border: 1px solid #ddd;
      font-size: .373333333rem;
      color: #7a7a7a;
      border-radius: .1333333rem;
  }
  .ball-pulse {
    padding: 4px 0;
    &>div {
      width: 15px;
      height: 15px;
      background-color: #eee;
      border-radius: 100%;
      margin: 2px;
      display: inline-block;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      &:nth-child(1) {
        -webkit-animation: scale .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08);
        animation: scale .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08);
      }
      &:nth-child(2) {
        -webkit-animation: scale .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08);
        animation: scale .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08);
      }
      &:nth-child(3) {
        -webkit-animation: scale .75s 0s infinite cubic-bezier(.2,.68,.18,1.08);
        animation: scale .75s 0s infinite cubic-bezier(.2,.68,.18,1.08);
      }
    }
  }
  @-webkit-keyframes scale {
    0%,80% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }

    45% {
        -webkit-transform: scale(.1);
        transform: scale(.1);
        opacity: .7
    }
  }

  @keyframes scale {
      0%,80% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1
      }

      45% {
          -webkit-transform: scale(.1);
          transform: scale(.1);
          opacity: .7
      }
  }
</style>

<script>
  export default{
  }
</script>
