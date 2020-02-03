<template>
    <div class="map-article-wrapper">
        <button @click="handleBackClick">Back</button>
        <Display :article="article" :loading="loading" @linkclicked="handleLinkClicked"></Display>
    </div>
</template>

<script>
import { actions, mutations } from '@/store';
import Display from '../articles/article-details-display';
import { mapState } from 'vuex';

export default {
    name: 'map-article-details',
    props: {
        articleId: Number
    },
    created() {
        this.$store.dispatch(actions.loadArticle, this.articleId);
    },
    computed: mapState({
        article: state => state.article.value,
        loading: state => state.article.loading
    }),
    methods: {
        handleBackClick() {
            this.$emit('backclicked');
        },
        handleLinkClicked(link) {
            this.$store.commit(mutations.setSelectedCountry, link);
        }
    },
    components: { Display }
};
</script>

<style>
.map-article-wrapper {
    text-align: left;
}
button {
    margin-left: 1.5rem;
}
</style>
