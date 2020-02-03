<template>
    <div @click="handleClickEvent(article.id)" class="article-list-item">
        <h4>{{article.headline}}</h4>
        <Links :links="article.links" @linkclicked="handleLinkClickEvent"/>
        <article>{{article.body}}</article>
    </div>
</template>

<script>
import Links from './article-links';

export default {
    name: 'article-list-item',
    props: { article: Object },
    methods: {
        handleClickEvent(id) {
            this.$emit('itemclicked', id);
        },
        handleLinkClickEvent(link) {
            this.$emit('linkclicked', link);
        }
    },
    components: { Links }
};
</script>

<style scoped>
.article-list-item {
    border: 2px solid black;
    padding: 1rem;
}
.article-list-item:hover {
    border: 2px solid #42b983;
    cursor: pointer;
}
.article-list-item h4 {
    margin: 0;
    margin-bottom: 0.5rem;
}
.article-list-item article {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</style>
