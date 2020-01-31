<template>
    <div class="article-details">
        <h4>{{article.headline}}</h4>
        <Links :links="article.links" />
        <article>{{article.body}}</article>
    </div>
</template>

<script>
import Links from './article-links';

export default {
    name: 'article-details-display',
    props: {
        article: Object
    },
    components: { Links }
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
</style>
