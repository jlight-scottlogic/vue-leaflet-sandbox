<template>
    <div id="map-article-list">
        <h3>Articles</h3>
        <Display :articles="articles" :loading="loading" @listitemclicked="handleListItemClicked" @linkclicked="handleLinkClicked"></Display>
    </div>
</template>

<script>
import Display from '../articles/article-list-display.vue';
import { mapState } from 'vuex';
import { actions, mutations } from '@/store';

export default {
    name: 'map-articles',
    created() {
        if (this.selectedCountries) {
            this.$store.dispatch(
                actions.loadArticlesByCountryCode,
                this.selectedCountries.map(c => c.code)
            );
        } else {
            this.$store.dispatch(actions.loadArticles);
        }
    },
    watch: {
        selectedCountries(newVal, oldVal) {
            if (newVal) {
                    this.$store.dispatch(
                    actions.loadArticlesByCountryCode,
                    newVal.map(c => c.code)
                );
                } else {
                    this.$store.dispatch(actions.loadArticles);
                }
        }
    },
    computed: {
        ...mapState({
            loading: state => state.articles.loading,
            articles: state => state.articles.value,
            selectedCountries: state => state.map.selectedCountries
        })
    },
    methods: {
        handleListItemClicked(id) {
            this.$emit('articleselected', id);
        },
        handleLinkClicked(link) {
            this.$store.commit(mutations.setSelectedCountry, link);
        }
    },
    components: { Display }
};
</script>
