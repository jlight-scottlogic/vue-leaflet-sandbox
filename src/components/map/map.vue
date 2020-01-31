<template>
    <div>
        <div class="map-container">
            <Display :selectedCountry="selectedCountry" @mapclicked="handleMapClicked"></Display>
        </div>
        <div class="article-section-container">
            <ArticleSection :selectedCountry="selectedCountry" />
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
    computed: mapState({
        selectedCountry: state => state.map.selectedCountry
    }),
    methods: {
        async handleMapClicked(e) {
            this.$store.dispatch(actions.selectCountryByLatLng, e.latlng);
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
