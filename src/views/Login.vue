<template>
	<div class="login">
		<div class="logo">
			<h2>blogLogin</h2>
		</div>
		<div class="loginForm">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="username" prop="name">
					<el-input type="" v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="password" prop="pwd">
					<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>


<script>
	import Cookies from 'js-cookie'
	export default {
		data() {
			var validateUsername = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('please input username'));
				} else {
					if (this.ruleForm.username !== '') {
						this.$refs.ruleForm.validateField('username');
					}
					callback();
				}
			};
			var validatePassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('please input password'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					username: '',
					password: '',
				},
				rules: {
					name: [{
						validator: validateUsername,
						trigger: 'blur'
					}],
					pwd: [{
						validator: validatePassword,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(this.ruleForm.username);
						Cookies.set('token', this.ruleForm.username, 30);
						this.$store.commit('settoken', this.ruleForm.username);
						this.$router.push({
							path: '/about'
						});
						this.$message('登录成功');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
<style scoped>
	.line {
		width: 100% !important;
		height: 100% !important;
		float: none !important;
	}

	html {}

	.logo {
		margin-top: 100px;
		text-align: center;
	}

	.loginForm {
		display: block;
		margin: 0px auto;
		width: 30%;
	}
</style>
