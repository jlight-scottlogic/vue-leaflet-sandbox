<template>
    <Display :countries="countries" :loading="loading"></Display>
</template>

<script>
import Display from './country-list-display.vue';
import { mapState } from 'vuex'
import { actions } from '@/store';

export default {
    name: 'country-list',
    created() {
        this.$store.dispatch(actions.loadCountries, this.countryId);
    },
    computed: mapState({
        countries: state => state.countries.value,
        loading: state => state.countries.loading
    }),
    components: { Display }
};
</script>

<style scoped>
table {
    margin: auto;
}
</style>
