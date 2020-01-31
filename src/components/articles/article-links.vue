<template>
    <div class="article-links">
        <div
            v-for="link in links"
            class="article-link"
            :key="link.code"
            @click.stop="handleClick(link)"
        >{{link.name}}</div>
    </div>
</template>

<script>
export default {
    name: 'article-links',
    props: {
        links: Array
    },
    methods: {
        handleClick(link) {
            this.$emit('linkclicked', link);
        }
    },
    components: {}
};
</script>

<style scoped>
.article-links {
    margin-bottom: 1rem;
}
.article-links > .article-link {
    display: inline-block;
    background-color: #42b983;
    border: 2px solid #42b983;
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: bold;
    margin-left: 0.25rem;
}
.article-links > .article-link:hover {
    border: 2px solid black;
    cursor: pointer;
}
.article-links > .article-link:first-child {
    margin-left: 0;
}
</style>
