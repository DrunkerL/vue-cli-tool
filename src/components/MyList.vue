<template>
    <div class="row">
        <!--展示用户列表-->
        <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style="width: 100px"/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <!--展示欢迎词-->
        <h1 v-show="info.isFirst">欢迎使用！</h1>
        <!--展示加载中-->
        <h1 v-show="info.isLoading">加载中……</h1>
        <!--展示错误信息-->
        <h1 v-show="info.errMsg">请求出错了，{{info.errMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name:"MyList",
        data(){
            return {
                info:{
                    users: [],
                    isFirst:true,
                    isLoading:false,
                    errMsg:""
                }
            }
        },
        mounted() {
            this.$bus.$on('updateListData',(dataObj) => {
                // console.log('我是List组件，收到了数据',users)
                this.info = {...this.info,...dataObj};
            })
        }
    };
</script>

<style>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>
