<template>
    <div id="demo">
        <h1>学校名称:{{name}}</h1>
        <h1>学校地址:{{address}}</h1>
    </div>
</template>

<script>
    export default {
        name: "School",
        data(){
            return {
                name:"SWUST",
                address:"四川绵阳"
            }
        },
        mounted() {
            this.$bus.$on('hello',(data)=>{
                console.log("我是School，收到了数据",data);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style scoped>
    #demo{
        background-color: #1cfc03;
        padding: 5px;
        margin-top: 30px;
    }
</style>