<template>
    <div id="demo">
        <img src="./assets/logo.png" alt="logo">
        <school></school>
        <student></student>
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";
    export default {
        name: "App",
        components: {Student, School},
        compontents:{
            School,
            Student
        }
    }
</script>

<style scoped>
    #demo{
        background-color: #03fcfc;
    }
</style>