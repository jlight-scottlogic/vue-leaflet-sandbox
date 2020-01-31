<template>
    <div class="article-details">
        <h4>{{article.headline}}</h4>
        <div class="article-links">
            <div v-for="link in article.links" :key="link.code" class="article-link">{{link.name}}</div>
        </div>
        <article>{{article.body}}</article>
    </div>
</template>

<script>
export default {
    name: 'article-details-display',
    props: {
        article: Object
    },
    components: {}
};
</script>

<style scoped>
.article-details {
    text-align: center;
    padding: 0 1.5rem;
}
.article-details > h4 {
    margin-bottom: 1rem;
}
.article-details > article {
    white-space: pre-line;
}
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
