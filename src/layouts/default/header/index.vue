<template>
  <div class="flex items-center h-full text-white flex-nowrap">
    <div class="flex items-center justify-center flex-none h-full cursor-pointer logo">
      <img :src="'/src/assets/img/logo1.png'" alt="" />
    </div>
    <div class="flex items-center flex-1 h-full flex-nowrap whitespace-nowrap nav">
      <router-link
        class="flex items-center h-full text-base cursor-pointer p-18"
        to="/"
        v-for="nav in navList"
        :key="nav"
      >
        {{ nav }}
      </router-link>
    </div>
    <div class="user">
      <el-popover
        :show-arrow="false"
        placement="bottom"
        offset="0"
        trigger="click"
        popper-class="popper-user-menu"
      >
        <template #reference>
          <div class="flex items-center justify-center h-full avatar">
            <img class="mr-2" :src="'/src/assets/img/user0.png'" alt="" />
            <span class="text-white name">骆佩珊</span>
          </div>
        </template>
        <div class="menu">
          <div class="menu-item">
            <fa-icon icon="user" />
            <span class="label">用户中心</span>
          </div>
          <div class="menu-item">
            <fa-icon :icon="['far', 'user']" />
            <span class="label">退出系统</span>
          </div>
        </div>
      </el-popover>
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
      let visible = true
      return { navList, visible }
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
  .user {
    height: 100%;
    .avatar {
      height: 60px;
      width: 112px;
      &:hover {
        background: #6aa7f5;
      }
    }
  }
</style>

<style lang="scss">
  .popper-user-menu {
    width: 112px !important;
    min-width: 112px !important;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    .menu {
      border: 1px solid rgba(34, 36, 38, 0.15);
      box-shadow: 0 1px 3px 0 rgba($color: #000, $alpha: 0.08);
      transform: translate(5px);
      .menu-item {
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: rgba($color: #000, $alpha: 0.7);
        cursor: pointer;
        &:hover {
          background: rgba($color: #000, $alpha: 0.05);
          color: rgba($color: #000, $alpha: 0.95);
        }
        .label {
          margin-left: 0.75em;
        }
      }
    }
  }
</style>
