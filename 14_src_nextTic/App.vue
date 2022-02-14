<template>
    <div id="app">
        <div class="todo-container">
            <div class="todo-wrap">

                <my-header @addTodo="addTodo"></my-header>

                <my-list :todoList="todoList" :checkToDo="checkToDo" :deleteTodo="deleteTodo"></my-list>

                <my-footer :todoList="todoList" @checkAllTodo="checkAllTodo" @clearAllToDo="clearAllToDo" ></my-footer>
            </div>
        </div>
    </div>
</template>

<script>
    import pubsub from "pubsub-js";
    import MyList from "./components/MyList";
    import MyFooter from './components/MyFooter.vue'
    import MyHeader from './components/MyHeader.vue'

    export default {
        components: { MyHeader, MyList, MyFooter },
        name: 'App',
        data() {
            return {
                todoList: JSON.parse(localStorage.getItem("todos")) || []
            }
        },
        methods: {
            // 添加一个todo
            addTodo(todo){
                this.todoList.unshift(todo)
                console.log(todo)
            },
            // 勾选或取消勾选一个todo
            checkToDo(id){
                this.todoList.forEach((todo)=>{
                    if (todo.id == id){
                        todo.finish = !todo.finish;
                    }
                })
            },
            // 更新一个todo
            updateTodo(id,title) {
                this.todoList.forEach(todo => {
                    if(todo.id === id) {
                        todo.title = title
                    }
                })
            },
            // 删除一个todo
            deleteTodo(_,id) {
                this.todoList = this.todoList.filter(todo => todo.id !== id)
            },
            // 全选或取消全选
            checkAllTodo(finish) {
                this.todoList.forEach(todo => {
                    todo.finish = finish
                })
            },
            // 清除所有已经完成的
            clearAllToDo(){
                this.todoList = this.todoList.filter((todo)=>{
                    return !todo.finish;
                })
            }
        },
       watch:{
            todoList:{
                deep:true,
                handler(value){
                    localStorage.setItem("todos",JSON.stringify(value))
                }
            }
       },
        mounted() {
            // this.$bus.$on('deleteTodo',this.deleteTodo);
            this.$bus.$on('checkToDo',this.checkToDo);
            this.$bus.$on('updateTodo',this.updateTodo)
            this.delPubId = pubsub.subscribe('deleteTodo',this.deleteTodo);
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.delPubId)
            this.$bus.$off('updateTodo');
            this.$bus.$off('checkToDo')
        },
    }
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-edit {
    color: #fff;
    background-color: lightgreen;
    border: 1px solid green;
    margin-right: 5px;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn-edit:hover {
    color: #fff;
    background-color: green;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>