<template>
    <div class="article-details">
        <div v-if="loading">Loading...</div>
        <div v-else-if="article == null">No Article data found</div>
        <div v-else>
            <h4>{{article.headline}}</h4>
            <Links :links="article.links" @linkclicked="handleLinkClicked"/>
            <article>{{article.body}}</article>
        </div>
    </div>
</template>

<script>
import Links from './article-links';

export default {
    name: 'article-details-display',
    props: {
        article: Object,
        loading: Boolean
    },
    methods: {
        handleLinkClicked(link) {
            this.$emit('linkclicked', link);
        }
    },
    components: { Links }
};
</script>

<style scoped>
.article-details {
    padding: 0 1.5rem;
}
.article-details h4 {
    margin-bottom: 1rem;
}
.article-details article {
    white-space: pre-line;
}
</style>
