<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "@/components/School";
    import Student from "@/components/Student";
    export default {
        name: "App",
        components: {Student, School},
        data(){
            return {
                msg:"你好世界"
            }
        }
    }
</script>

<style scoped>
    #app{
        background-color: aquamarine;
        padding: 15px;
        margin-top: 30px;
    }
</style>