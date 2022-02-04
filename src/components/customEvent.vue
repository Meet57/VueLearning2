<template>
    <div>
        <Input :value="value" @input="$emit('input', $event.target.value)"></Input>
        {{ value }}
    </div>
</template>

<script>
export default {
    props: ["value"],
    // take prop then make model with same prop name and a funtion
    // pass an emit which takes changes and pass second parameter you want the changes and
    // prop will also change in parent with out emit function
    model: {
        prop: "value",
        event: "input",
    },
};
</script>

<style></style>
