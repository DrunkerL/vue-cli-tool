<template>
    <div id="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
export default {
    name: "School",
    data(){
        return {
            name:"SWUST",
            address:"四川绵阳"
        }
    }
}
</script>

<style scoped>
    #school{
        background-color: #03fcfc;
    }
</style>