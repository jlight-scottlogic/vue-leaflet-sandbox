<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/countries">Countries</router-link> |
            <router-link to="/map">Map</router-link> |
            <router-link to="/articles">Articles</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
@import './assets/styles/main.css';
@import '../node_modules/vue-multiselect/dist/vue-multiselect.min.css';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 2rem 0 1rem 0;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
