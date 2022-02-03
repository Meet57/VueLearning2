<template>
    <div>
        <button v-on:click="clicked('you just clicked on button  2')">Button 2</button>
        <button v-on:click="fire">Fire from mixins</button>
    </div>
</template>

<script>
import meet from "../mixins/mixins.js";

// const excludedMethods = ["fire"];

// const m = {
//     ...meet,
//     methods: {
//         ...Object.keys(meet.method)
//             .filter((key) => excludedMethods.includes(key) !== true)
//             .reduce((prev, key) => ({ ...prev, [key]: meet.methods[key] }), {}),
//     },
// };

//two method in 'meet' fire and clicked || restricted fire
export default {
    mixins: [meet],
    methods: {},
};
</script>

<style></style>
