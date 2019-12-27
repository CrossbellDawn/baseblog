<template>
  <div>
    <el-col :span="3">
      <el-menu
        :default-active="this.$route.path"
        router
        mode="horizontal"
        class="nav"
        @open="handleOpen"
        @close="handleClose"
        background-color="#393D49"
        text-color="#fff"
        active-text-color="#5FB878"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-col>

    <router-view class="menu-right" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "/components/BlogCenter",
          navItem: "博客中心",
          icon: "el-icon-menu"
        },
        {
          name: "/components/BlogMain",
          navItem: "博客主页",
          icon: "el-icon-user-solid"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>