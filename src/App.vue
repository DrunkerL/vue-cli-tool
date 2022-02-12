<template>
    <div>
        <h1>{{msg}}</h1>
        <!--通过父组件给子组件传递函数类型的props实现:子给父传递数据-->
        <School :getSchoolName="getSchoolName"></School>
        <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据,第一种写法：使用@或者v-on-->
        <!--<Student @drunkerl="vegeta"></Student>-->
        <!--通过父组件给子组件绑定一个自定义事件实现:子给父传递数据,第一种写法：使用ref-->
        <Student ref="student"></Student>

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
        },
        methods:{
            getSchoolName(name){
                console.log("学校名称是：",name)
            },
            vegeta(name){
                console.log("我是",name);
            }
        },
        mounted() {
            // this.$refs.student.$on('drunkerl',this.vegeta)  //绑定自定义事件
            this.$refs.student.$once('drunkerl',this.vegeta) //绑定自定义事件（一次性）
        }
    }
</script>

<style scoped>

</style>