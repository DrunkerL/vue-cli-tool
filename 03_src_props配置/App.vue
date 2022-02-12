<template>
    <Student name="Drunker.L" :age="21" sex="男"></Student>
</template>

<script>
    import Student from "@/components/Student";
    export default {
        name: "App",
        components:{
            Student
        }
    }
</script>

<style scoped>

</style>