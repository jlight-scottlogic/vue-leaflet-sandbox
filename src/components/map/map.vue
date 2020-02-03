<template>
    <div>
        <div class="map-container">
            <Display :selectedCountries="selectedCountries" @mapclicked="handleMapClicked" @mapclickedCtrl="handleMapClickedCtrl"></Display>
        </div>
        <div class="article-section-container">
            <ArticleSection :selectedCountries="selectedCountries" />
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
        selectedCountries: state => state.map.selectedCountry
    }),
    methods: {
        async handleMapClicked(e) {
            this.$store.dispatch(actions.selectCountryByLatLng, { latlng: e.latlng, add: false });
        },
        async handleMapClickedCtrl(e) {
            this.$store.dispatch(actions.selectCountryByLatLng, { latlng: e.latlng, add: true });
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
