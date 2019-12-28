<template>
  <div>
    <el-form
      ref="loginFormRef"
      :model="form"
      :rules="loginFormRules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginFormRef')"
          >登录</el-button
        >
        <el-button @click="resetLoginForm('loginFormRef')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名称',
            trigger: 'blur'
          },
          {
            min: 4,
            max: 6,
            message: '长度在4到6个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入登录密码',
            trigger: 'blur'
          },
          {
            min: 4,
            max: 6,
            message: '长度在4到16个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置表单信息
    resetLoginForm(formName) {
      this.$refs[formName].resetFields()
    },
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(async valid => {
        if (valid) {
           setTimeout(() => {
          window.sessionStorage.setItem('token', this.form.username)
          Cookies.set('token',this.form.username,30);
          this.$store.commit('settoken', this.form.username);
          console.log(this.$store.state.token);
          this.$router.push('/main')
          this.$message.success('欢迎登录')
          }, 2000);
        } else {
          this.$message.warning('警告：请输入正确的账号密码')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
