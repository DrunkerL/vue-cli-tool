<template>
    <div id="demo">
        <h1>学生姓名：{{name}}</h1>
        <h1>学生性别：{{sex}}</h1>
        <h1>学生年龄：{{age}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data(){
            return {
                name:"Drunker.L",
                sex:"男",
                age:21
            }
        },
    }
</script>

<style scoped>
    #demo{
        background-color: #03fcfc;
    }
</style>