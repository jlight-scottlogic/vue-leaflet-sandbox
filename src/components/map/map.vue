<template>
    <div>
        <div class="map-container">
            <Display
                :selectedCountry="selectedCountry"
                :articles="articles"
                @mapclicked="handleMapClicked"
            ></Display>
        </div>
        <div class="article-section-container">
            <ArticleSection
                :articles="articles"
                :articlesLoading="articlesLoading"
            />
        </div>
    </div>
</template>

<script>
import ArticleSection from './map-article-section';
import Display from './map-display';
import { mapState } from 'vuex';
import { actions } from '@/store';

export default {
    name: 'map-component',
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
    computed: mapState({
        selectedCountry: state => state.map.selectedCountry,
        articles: state => state.articles.value,
        articlesLoading: state => state.articles.loading
    }),
    methods: {
        handleMapClicked(e) {
            this.$store.dispatch(
                actions.toggleSelectedCountryByLatLng,
                e.latlng
            );
        }
    },
    components: { ArticleSection, Display }
};
</script>

<style scoped>
.map-container {
    width: 50%;
    display: inline-block;
    height: 600px;
}
.article-section-container {
    vertical-align: top;
    width: 50%;
    display: inline-block;
    height: 600px;
    overflow-y: scroll;
}
</style>
