<template>
    <div>
        <!-- <a href="https://www.googe.com" target="blank" class="nav-link">
            <slot> Patel Meet </slot>
        </a> -->
        <header>
            <slot name="header" :user="user.firstname">
                <!-- <h1>{{ user }}</h1> -->
                <h1> {{user.lastname}} </h1>
            </slot>
        </header>
        <main>
            <slot :user="user"></slot>
        </main>
        <footer>
            <slot name="footer" :user="user"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: "navigationLink",
    data() {
        return {
            user: {
                firstname: "Meet",
                lastname: "Patel"
            },
        };
    },
};
</script>

<style></style>
