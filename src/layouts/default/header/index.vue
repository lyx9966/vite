<template>
  <div class="flex items-center h-full text-white flex-nowrap">
    <div class="flex items-center justify-center flex-none h-full cursor-pointer logo">
      <img :src="'/src/assets/img/logo1.png'" alt="" />
    </div>
    <div class="flex items-center flex-1 h-full cursor-pointer flex-nowrap whitespace-nowrap nav">
      <router-link
        class="flex items-center h-full text-base p-18"
        to="/"
        v-for="nav in navList"
        :key="nav"
      >
        {{ nav }}
      </router-link>
    </div>
    <div class="user">
      <el-dropdown>
        <div>
          <img :src="'/src/assets/img/user0.png'" alt="" />
        </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      let navList = [
        '流程',
        '人事',
        '行政',
        '工资',
        '商务',
        '销售',
        '财务',
        'PMO',
        '经分',
        '知识库',
        '组织架构',
        '系统管理',
      ]
      return { navList }
    },
  })
</script>

<style lang="scss" scoped>
  .logo {
    width: 188px;

    &:hover {
      background: #6aa7f5;
    }
  }

  .nav {
    a:hover {
      background: #6aa7f5;
    }
  }
</style>
