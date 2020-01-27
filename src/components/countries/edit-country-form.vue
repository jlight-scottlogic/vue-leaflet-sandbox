<template>
    <div v-if="country != null">
        <Display :country="country" @onsave="save"></Display>
    </div>
</template>

<script>
import Display from './create-country-form-display.vue';
import * as client from '../../client/fake-client';

export default {
    name: 'edit-country-form',
    props: {
        countryId: Number
    },
    data() {
        return {
            country: null
        };
    },
    created() {
        this.load();
    },
    methods: {
        async load() {
            this.country = await client.get(`countries/${this.countryId}`);
        },
        async save(newCountry) {
            await client.put(`countries/${this.countryId}`, newCountry);
            this.$router.push('/countries');
        }
    },
    components: { Display }
};
</script>
