<template>
    <!--组件的结构-->
    <div id="demo">
        <h1>学生名称：{{name}}</h1>
        <h1>学生年龄：{{age}}</h1>
        <button @click="showname">点我提示学生名称</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据，方法等）
export default {
    name:"School",
    data(){
        return {
            name:"Drunker.L",
            age:21
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
    background-color: #1cfc03;
}
</style>