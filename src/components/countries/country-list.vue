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
    beforeMount() {
        this.getCountries();
    },
    methods: {
        getCountries() {
            this.loading = true;
            client.get('countries').then(results => {
                this.countries = results;
                this.loading = false;
            });
        }
    },
    components: { Display }
};
</script>
