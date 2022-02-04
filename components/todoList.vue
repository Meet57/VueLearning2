<template>
    <li>{{ todo.text }}</li>
</template>

<script>
export default {
    props:{
        'todo':{
            type: Object,
        }
    },
    // props:['todo']
};
</script>

<style></style>
