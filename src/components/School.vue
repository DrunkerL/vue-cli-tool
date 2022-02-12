<template>
    <div id="school">
        <h1>学校名称:{{name}}</h1>
        <h1>学校地址:{{address}}</h1>
        <button @click="sendSchoolName">把学校名称给App</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        props:['getSchoolName'],
        data(){
            return {
                name:"SWUST",
                address:"四川绵阳"
            }
        },
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style scoped>
    #school{
        background-color: #1cfc03;
        padding: 5px;
        margin-top: 30px;
    }
</style>