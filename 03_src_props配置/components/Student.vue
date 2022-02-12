<template>
    <div id="student">
        <h1>{{msg}}</h1>
        <h1>学生姓名：{{name}}</h1>
        <h1>学生年龄：{{age}}</h1>
        <h1>学生性别：{{sex}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data(){
            return {
                msg:"你好世界！"
            }
        },
        // props:['name','sex','age'] 简单声明接受
        //接受的同时，对数据类型进行限制
        /*props: {
            name:String,
            age:Number,
            sex:String
        }*/
        //接受的同时，对数据的类型限制+默认值指定+必要性限制
        props:{
            name:{
                type:String,   //name的类型是String
                required:true, //name是必要的
            },
            age: {
                type:Number,
                default:99
            },
            sex:{
                type:String,
                required: true
            }
        }
    }
</script>

<style scoped>
    #student{
        background-color: #03fcfc;
    }
</style>