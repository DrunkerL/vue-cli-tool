<template>
    <transition name="todo" appear>
        <li>
            <label>
                <input type="checkbox" :checked="todo.finish" @change="handleCheck(todo.id)"/>
                <span v-show="!todo.isEdit">{{todo.title}}</span>
                <input type="text" :value="todo.title" v-show="todo.isEdit"
                       @blur="handleBlur(todo, $event)" ref="inputTitle">
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
        </li>
    </transition>
</template>

<script>
    export default {
        name:"MyItem",
        props:['todo','checkToDo','deleteTodo'],
        methods:{
            handleDelete(){
                //通知App删除对应的组件
                var c = confirm("确认删除这一项吗？");
                if(c == true){
                    this.deleteTodo(this.todo.id);
                }

            },
            handleCheck(id){
                //通知APP组件将对应的todo对象的finish值取反
                this.checkToDo(id);
            },
            handleEdit(todo){
                console.log(todo);
            }
        }
    }
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover{
    background-color: #ddd;
}

li:hover button{
    display: block;
}

.todo-enter-active{
    animation: todo 0.5s linear;
}

.todo-leave-active{
    animation: todo 0.5s linear reverse;
}

@keyframes todo {
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>