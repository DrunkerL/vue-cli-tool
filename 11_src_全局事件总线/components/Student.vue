<template>
    <div id="demo">
        <h1>学生姓名：{{name}}</h1>
        <h1>学生性别：{{sex}}</h1>
        <h1>学生年龄：{{age}}</h1>
        <button @click="sendStudentName">把StudentName给School组件</button>
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
        methods:{
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        }
    }
</script>

<style scoped>
    #demo{
        background-color: #03fcfc;
        padding: 5px;
        margin-top: 30px;
    }
</style>