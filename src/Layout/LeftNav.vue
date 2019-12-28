<template>
  <div class="leftnavbar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo "
      background-color="#393D49"
      text-color="#fff"
      active-text-color="#5FB878"
      router
    >
      <el-menu-item
        :index="item.path"
        v-for="item in menuList"
        :key="item.id"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.authName }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //左侧菜单数据
      menuList: []
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    getMenuList() {
      this.menuList = [
        {
          id: 101,
          icon: 'el-icon-menu',
          authName: '图表',
          path: '/chart',
          children: [null]
        },
        {
          id: 102,
          icon: 'el-icon-user-solid',
          authName: '用户信息',
          path: '/users',
          children: [null]
        }
      ]
    }
  }
}
</script>

<style scoped>
.leftnavbar {
  height: 100%;
}
.el-menu {
  height: 100%;
}
</style>
