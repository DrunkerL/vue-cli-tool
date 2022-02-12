<template>
    <!--组件的结构-->
    <div id="demo">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
        <button @click="showname">点我提示学校的名称</button>
    </div>
</template>

<script>
    //组件交互相关的代码（数据，方法等）
    export default {
        name:"School",
        data(){
            return {
                name:"SWUST",
                address:"四川绵阳"
            }
        },
        methods:{
           showname(){
               alert(this.name);
           }
        }
    }
</script>

<style>
    /*组件的样式  */
    #demo{
        background-color: aqua;
    }
</style>