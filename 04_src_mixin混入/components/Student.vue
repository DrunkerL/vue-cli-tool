<template>
    <div id="student">
        <h1 @click="showName">学生姓名：{{name}}</h1>
        <h1>学生性别：{{sex}}</h1>
        <h1>学生年龄：{{age}}</h1>
    </div>
</template>

<script>
    //引入一个人混合
    import {mixin,mixin2} from '../mixin'
    export default {
        name: "Student",
        data(){
            return {
                name:"Drunker.L",
                sex:"男",
                age:21
            }
        },
        mixins:[mixin,mixin2]
    }
</script>

<style scoped>
    #student{
        background-color: #03fcfc;
    }
</style>