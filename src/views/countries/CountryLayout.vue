<template>
    <div>
        <div class="banner"><h1>Country Name Here</h1></div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'country-layout',
    data() {
        return {};
    },
    methods: {},
    components: {}
};
</script>

<style scoped>
    .banner {
        width: 100%;
        background-color: #42b983;
        padding: 0.5rem 0;
    }
</style>
