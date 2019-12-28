<template>
  <div class="main-container">
    <el-container class="main-container">
      <el-aside width="200px">
        <left-nav></left-nav>
      </el-aside>
      <el-main>
        <right-app></right-app>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LeftNav from '@/Layout/LeftNav'
import RightApp from '@/Layout/RightApp'

export default {
  components: {
    'left-nav': LeftNav,
    'right-app': RightApp
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.main-container {
  height: 100%;
}
.el-main{
  padding: 0;
  margin: 0;
}
</style>
