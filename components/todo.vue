<template>
    <div id="todo-list-example">
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">Add a todo</label>
            <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
            <button>Add</button>
        </form>
        <ul>
            <li v-for="(todo, index) in todos" v-bind:key="todo.id">
                {{ todo.title }}
                <button v-on:click="todos.splice(index, 1)">delete</button>
            </li>
        </ul>
        <button :title="'Check console'" v-on:click="$emit('meet', 123)">Call parent component</button>
    </div>
</template>

<script>
export default {
    name:'Main',
    data() {
        return {
            newTodoText: "",
            todos: [],
            id: 0,
        };
    },
    methods: {
        addNewTodo() {
            this.todos.push({ id: this.id, title: this.newTodoText });
            this.id++;
            this.newTodoText = "";
        },
    },
};
</script>

<style></style>
