<!-- <script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const goHome = () => {
        router.push('/welcome')
    }
</script> -->


<template>
  <h1>欢迎来到登录界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
    export default {
        name: 'login',
        methods: {
            goHome() {
                this.$router.push('/welcome')
            }
        },
    }
</script>

<style scoped>
</style>
