<template>
    <div id="student">
        <h1>学生姓名：{{name}}</h1>
        <h1>学生性别：{{sex}}</h1>
        <h1>学生年龄：{{age}}</h1>
        <button @click="sendStudentName">我是谁</button>
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
                //触发Student组件实例上的vegeta事件
                this.$emit('drunkerl',this.name)
            }
        }
    }
</script>

<style scoped>
    #student{
        background-color: #03fcfc;
        padding: 5px;
        margin-top: 30px;
    }
</style>