<template>
  <h1>欢迎来到登录界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
    import Welcome from './WelcomeViews.vue'
    export default {
        name: 'login',
        components: {Welcome},
        methods: {
            goHome() {
                this.$router.push('/welcome')
            }
        },
    }
</script>

<style scoped>
</style>
