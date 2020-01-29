<template>
    <Display :countries="countries"></Display>
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
        countries: state => state.countries.value
    }),
    components: { Display }
};
</script>

<style scoped>
#map-container {
    height: 540px;
}
</style>
