<template>
  <el-container>
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import LayoutHeader from './header/index.vue'

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutHeader,
    },
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  .el-header {
    background: $theme-01;
  }
</style>
