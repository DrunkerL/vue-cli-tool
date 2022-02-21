<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" :appear="true">
            <h1 id="come" v-show="isShow">你好啊！</h1>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "Test",
        data(){
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>
    h1{
        background-color: #1cfc03;
    }
    .hello-enter-active{
        animation: cartoon 1s;
    }
    .hello-leave-active{
        animation: cartoon 1s reverse;
    }
    @keyframes cartoon {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>