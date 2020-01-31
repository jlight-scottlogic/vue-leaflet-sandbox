<template>
    <div class="article-links">
        <div v-for="link in links" :key="link.code" class="article-link">{{link.name}}</div>
    </div>
</template>

<script>
export default {
    name: 'article-links',
    props: {
        links: Array
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
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: bold;
    margin-left: 0.25rem;
}
.article-links > .article-link:first-child {
    margin-left: 0;
}
</style>
