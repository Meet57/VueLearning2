<template>
    <div>
        <h1 v-rainbow>
            {{ title }}
        </h1>
        <button v-on:click="reverseTitle">Reverse</button>
        <!-- Hover title -->
        <hr />
        <div v-bind:title="message">
            Hover your mouse over me for a few seconds to see my dynamically bound title!
        </div>
        <hr />
        <h1 v-rainbow>Model</h1>
        <p>{{ message ? message + " - " + message.length : 0 }}</p>
        <p>Reversed Computed Method : {{ reverseMessage }}</p>
        <input v-model="message" />
        <p v-once>Vue-Once : {{ message }}</p>
        <hr />
        <h1 v-rainbow>Component v-for</h1>
        <ul>
            <todo-list
                v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id"
            ></todo-list>
        </ul>
        <ul>
            <li v-for="(value, name, index) in meet" :key="name">
                {{ index }} -> {{ name }} : {{ value }}
            </li>
        </ul>
        <ul v-for="set in sets" :key="set.toString()">
            <li v-for="n in even(set)" :key="n.toString()">{{ n }}</li>
        </ul>
        <hr />
        <h1 v-rainbow>Class and Style Bindings</h1>
        <div class="flex">
            <div v-bind:class="isRed ? 'redbg' : 'bluebg'"></div>
            <!-- <div v-bind:class="{ 'redbg' : isRed }">asd</div> -->
            <div
                v-bind:style="{
                    height: box.length + 'px',
                    width: box.length + 'px',
                    backgroundColor: box.backgroundColor,
                }"
            ></div>
        </div>
        <hr />
        <h1 v-rainbow>Todo</h1>
        <todo v-on:meet="printmeet"></todo>
        <hr />
        <h1 v-rainbow>Event handling</h1>
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <button v-on:click="greet">Greet</button><br />
        <button v-on:click.ctrl.exact="onCtrlClick">Press Control and click</button>
        <hr />
        <h1 v-rainbow>Form Binding</h1>
        <input type="checkbox" id="checkbox" v-model="isRed" />
        <label for="checkbox">{{ isRed }}</label>
        <br />
        <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value" :key="option.text">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
        <hr />
        <h1 v-rainbow>Custom Events</h1>
        <div class="box">
            <h4>Data : {{ customEventData }}</h4>
            <custom-event v-model="customEventData"></custom-event>
            {{ size }} - {{ isRed }}
            <new-custom-event :size.sync="size" :isRed.sync="isRed"></new-custom-event>
        </div>
        <hr />
        <h1 v-rainbow>Slots</h1>
        <navigation-link>
            <template #header="{ user }">
                <h1>
                    {{ user }}
                </h1>
            </template>

            <!-- <template #default="Props"> -->
            <template v-if="isRed" v-slot="Props">
                {{ Props }}
            </template>

            <template #footer="Props">
                <hr />
                {{ Props }}
                <p>Here's some contact info</p>
            </template>
        </navigation-link>
        <hr />
        <h1 v-rainbow>Mixins</h1>
        <mixins-alert></mixins-alert>
        <br />
        <button v-on:click="clicked('you just clicked on button  1')">Button 1</button>
        <button v-on:click="fire">Fire from mixins</button>
    </div>
</template>

<script>
import todoList from "./components/todoList";
import todo from "./components/todo.vue";
import customEvent from "./components/customEvent.vue";
import newCustomEvent from "./components/newCustomEvent.vue";
import navigationLink from "./components/navigationLink.vue";
import mixinsAlert from "./components/mixinsAlert.vue";
import clickalertmixins from "./mixins/mixins.js"

export default {
    name: "MeetPatel.js",
    mixins:[clickalertmixins],
    components: {
        "todo-list": todoList,
        todo: todo,
        "custom-event": customEvent,
        "new-custom-event": newCustomEvent,
        "navigation-link": navigationLink,
        "mixins-alert": mixinsAlert,
    },
    data() {
        return {
            title: "Meet Patel",
            message: "MotaData",
            groceryList: [
                { id: 0, text: "Vegetables" },
                { id: 1, text: "Cheese" },
                { id: 2, text: "Whatever else humans are supposed to eat" },
            ],
            sets: [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
            ],
            meet: {
                Name: "Meet Patel",
                Designation: "Software Developer",
                BOD: "2000",
            },
            isRed: true,
            box: {
                backgroundColor: "#ddd",
                length: "100",
            },
            counter: 0,
            selected: "A",
            options: [
                { text: "One", value: "A" },
                { text: "Two", value: "B" },
                { text: "Three", value: "C" },
            ],
            customEventData: "Meet Patel",
            size: "Little",
        };
    },
    methods: {
        reverseTitle() {
            this.title = this.title.split("").reverse().join("");
        },
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0;
            });
        },
        printmeet(data) {
            console.log("Hello, Called from child component", data);
        },
        greet: function (event) {
            alert("Hello " + this.title + "!");
            if (event) {
                alert(event.target.tagName);
            }
        },
        onCtrlClick() {
            alert("You have pressed CTRL");
        },
        hello() {
            alert("Mixins");
        },
    },
    computed: {
        reverseMessage() {
            return this.message.split("").reverse().join("");
        },
    },
    // Useeffect of react with parameters
    watch: {
        message: function (oldvalue, newvalue) {
            console.log(oldvalue, newvalue);
        },
    },
};
</script>

<style>
.redbg {
    background-color: red;
    height: 100px;
    width: 150px;
    transition: 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.bluebg {
    background-color: blue;
    height: 100px;
    width: 300px;
    transition: 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.flex {
    display: flex;
    flex-direction: row;
}
</style>
