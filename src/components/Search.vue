<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword"/>
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Search",
        data(){
            return {
                keyword:""
            }
        },
        methods:{
            searchUsers(){
                //请求前更新List的数据
                this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:"",users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyword}\n`).then(
                    //请求成功更新List的数据
                    response => {
                        // console.log('请求成功了',response.data.items)
                        // this.$bus.$emit('updateListData',response.data.items)
                        this.$bus.$emit('updateListData',{isFirst:false,isLoading:false,errMsg:"",users:response.data.items})
                    },
                    //请求失败更新List的数据
                    error => {
                        console.log('请求失败了',error.msg)
                        this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:error.msg,users:[]})
                    }
                )
            }
        },
        beforeDestroy() {
            this.$bus.$off('updateListData')
        }

    }
</script>

<style scoped>
    .jumbotron{
        background-color: #f1f0f0;
        padding: 40px;
    }
    .jumbotron-heading{
        font-size: 25px;
    }
</style>