<template>
    <div>
        <input :value="size" @input="$emit('update:size', $event.target.value)" />
        <input type="checkbox" @input="$emit('update:isRed', $event.target.checked)" />
    </div>
</template>

<script>
export default {
    props: ["size", "isRed"],
};
</script>

<style></style>
