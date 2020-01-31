<template>
    <div>
        <div class="map-container">
            <Display :selectedCountry="selectedCountry" @mapclicked="handleMapClicked"></Display>
        </div>
        <div class="articles-container">
            <Articles :selectedCountry="selectedCountry" />
        </div>
    </div>
</template>

<script>
import Articles from './map-articles';
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
    components: { Articles, Display }
};
</script>

<style scoped>
.map-container {
    width: 50%;
    display: inline-block;
}
.articles-container {
    vertical-align: top;
    width: 50%;
    display: inline-block;
}
</style>
