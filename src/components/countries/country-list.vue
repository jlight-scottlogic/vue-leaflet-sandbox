<template>
    <Display :countries="countries" :loading="loading"></Display>
</template>

<script>
import Display from './country-list-display.vue';
import * as client from '../../client/fake-client';

export default {
    name: 'country-list',
    data() {
        return {
            countries: [],
            loading: false
        };
    },
    created() {
        this.getCountries();
    },
    methods: {
        async getCountries() {
            this.loading = true;
            this.countries = await client.get('countries');
            this.loading = false;
        }
    },
    components: { Display }
};
</script>

<style>
table {
    margin: auto;
}
</style>
