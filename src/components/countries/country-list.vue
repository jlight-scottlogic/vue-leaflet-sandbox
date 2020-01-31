<template>
    <Display :countries="countries" :loading="loading" @oneditclicked="handleEditClicked"></Display>
</template>

<script>
import Display from './country-list-display.vue';
import { mapState } from 'vuex';
import { actions, mutations } from '@/store';

export default {
    name: 'country-list',
    created() {
        this.$store.dispatch(actions.loadCountries);
    },
    computed: mapState({
        countries: state => state.countries.value,
        loading: state => state.countries.loading
    }),
    methods: {
        handleEditClicked(id) {
            this.$store.commit(mutations.setCountry, this.countries.find(c => c.id === id));
            this.$router.push(`/countries/${id}/edit`);
        }
    },
    components: { Display }
};
</script>
