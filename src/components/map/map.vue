<template>
    <Display :countries="countries" :selectedCountry="selectedCountry" @mapclicked="handleMapClicked"></Display>
</template>

<script>
import Display from './map-display';
import { mapState } from 'vuex';
import { actions } from '@/store';

export default {
    name: 'map-component',
    created() {
        this.$store.dispatch(actions.loadCountries);
    },
    computed: mapState({
        countries: state => state.countries.value,
        selectedCountry: state => state.map.selectedCountry
    }),
    methods: {
        async handleMapClicked(e) {
            this.$store.dispatch(actions.selectCountryByLatLng, e.latlng);
        }
    },
    components: { Display }
};
</script>

<style scoped>
#map-container {
    height: 540px;
}
</style>
