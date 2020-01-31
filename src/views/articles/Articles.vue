<template>
    <div>
        <div class="banner">
            <h1>Articles</h1>
        </div>
        <ArticlesList></ArticlesList>
        <br />
        <button @click="navigateToAddPage">Add</button>
    </div>
</template>

<script>
import ArticlesList from '@/components/articles/article-list.vue';

export default {
    name: 'Articles',
    methods: {
        navigateToAddPage() {
            this.$router.push('articles/create');
        }
    },
    components: { ArticlesList }
};
</script>
