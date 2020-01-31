<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="empty">No Articles!</div>
        <template v-else>
            <div class="article-list">
                <Item
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                    @itemclicked="handleItemClickedEvent"
                />
            </div>
        </template>
    </div>
</template>

<script>
import Item from './article-list-item';

export default {
    name: 'article-list-display',
    props: {
        articles: Array,
        loading: Boolean
    },
    computed: {
        empty() {
            return this.articles == null || this.articles.length === 0;
        }
    },
    methods: {
        handleItemClickedEvent(id) {
            this.$emit('listitemclicked', id);
        }
    },
    components: { Item }
};
</script>

<style scoped>
.article-list {
    text-align: left;
    padding: 1.5rem;
}
.article-list .article-list-item {
    margin-top: 1rem;
}
.article-list .article-list-item:first-child {
    margin-top: 0;
}
</style>
