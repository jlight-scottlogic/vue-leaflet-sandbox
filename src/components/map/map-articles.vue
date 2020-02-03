<template>
    <div id="map-article-list">
        <h3>Articles</h3>
        <Display :articles="articles" :loading="loading" @listitemclicked="handleListItemClicked"></Display>
    </div>
</template>

<script>
import Display from '../articles/article-list-display.vue';
import { mapState } from 'vuex';
import { actions } from '@/store';

export default {
    name: 'map-articles',
    props: {
        selectedCountry: Object
    },
    created() {
        if (this.selectedCountry) {
            this.$store.dispatch(
                actions.loadArticlesByCountryCode,
                this.selectedCountry.code
            );
        } else {
            this.$store.dispatch(actions.loadArticles);
        }
    },
    watch: {
        selectedCountry(newVal, oldVal) {
            if (newVal?.code !== oldVal?.code) {
                if (newVal) {
                    this.$store.dispatch(
                        actions.loadArticlesByCountryCode,
                        newVal.code
                    );
                } else {
                    this.$store.dispatch(actions.loadArticles);
                }
            }
        }
    },
    computed: {
        ...mapState({
            loading: state => state.articles.loading,
            articles: state => state.articles.value
        })
    },
    methods: {
        handleListItemClicked(id) {
            this.$emit('articleselected', id);
        }
    },
    components: { Display }
};
</script>
