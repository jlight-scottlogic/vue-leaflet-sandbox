<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="country == null">No Country data found</div>
    <div v-else>
        <Display :country="country" @onsave="save"></Display>
    </div>
</template>

<script>
import Display from './country-form.vue';
import * as client from '../../client/fake-client';

export default {
    name: 'edit-country-form',
    props: {
        countryId: Number
    },
    data() {
        return {
            country: null,
            loading: false
        };
    },
    created() {
        this.load();
    },
    methods: {
        async load() {
            this.loading = true;
            this.country = await client.get(`countries/${this.countryId}`);
            this.loading = false;
        },
        async save(newCountry) {
            await client.put(`countries/${this.countryId}`, newCountry);
            this.$router.push('/countries');
        }
    },
    components: { Display }
};
</script>
