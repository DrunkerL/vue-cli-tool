<template>
    <div id="app">
        <div class="todo-container">
            <div class="todo-wrap">
                <test></test>
                <test2></test2>
                <test3></test3>
            </div>
        </div>
    </div>
</template>

<script>
    import test from "@/components/Test";
    import test2 from "@/components/Test2";
    import test3 from "@/components/Test3";

    export default {
        components: { test,test2,test3},
        name: 'App',

    }
</script>
