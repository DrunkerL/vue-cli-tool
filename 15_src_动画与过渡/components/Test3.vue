<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group
            :appear="true"
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__bounceOutUp"
        >
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">Drunker.L！</h1>
        </transition-group>

    </div>
</template>

<script>
    import 'animate.css'
    export default {
        name: "Test2",
        data(){
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>

</style>