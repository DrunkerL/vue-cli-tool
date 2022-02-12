<template>
    <div id="school">
        <h1 @click="showName">学校名称:{{name}}</h1>
        <h1>学校地址:{{address}}</h1>
    </div>
</template>

<script>
    import {mixin,mixin2} from "@/mixin";
    export default {
        name: "School",
        data(){
            return {
                name:"SWUST",
                address:"四川绵阳"
            }
        },
        mixins:[mixin,mixin2]
    }
</script>

<style scoped>
    #school{
        background-color: #1cfc03;
    }
</style>