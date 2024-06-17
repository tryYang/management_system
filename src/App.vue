<template>
  <!-- <el-button @click="change_svg"> 改变svg </el-button>

  <svg_-y :name="name_svg" color="green" width="100px" height="100px"> </svg_-y> -->
  <h1>测试代码</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'
let name_svg = ref('message')
function change_svg() {
  name_svg.value = name_svg.value == 'message' ? 'heart' : 'message'
}
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
