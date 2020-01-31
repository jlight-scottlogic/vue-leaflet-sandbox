<template>
    <Display :articles="articles" :loading="loading" @oneditclicked="handleEditClicked"></Display>
</template>

<script>
import Display from './article-list-display.vue';
import { mapState } from 'vuex';
import { actions, mutations } from '@/store';

export default {
    name: 'article-list',
    created() {
        this.$store.dispatch(actions.loadArticles);
    },
    computed: mapState({
        articles: state => state.articles.value,
        loading: state => state.articles.loading
    }),
    methods: {
        handleEditClicked(id) {
            this.$store.commit(mutations.setArticle, this.articles.find(c => c.id === id));
            this.$router.push(`/articles/${id}/edit`);
        }
    },
    components: { Display }
};
</script>
