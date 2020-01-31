<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="country == null">No Country data found</div>
    <div v-else>
        <Display :country="country" :saving="saving" @onsave="save"></Display>
    </div>
</template>

<script>
import Display from './country-form.vue';
import { actions } from '@/store';
import { mapState } from 'vuex'

export default {
    name: 'edit-country-form',
    computed: mapState({
        country: state => state.country.value,
        loading: state => state.country.loading,
        saving: state => state.country.saving
    }),
    methods: {
        async save(country) {
            await this.$store.dispatch(actions.saveExistingCountry, country);
            this.$router.push('/countries');
        }
    },
    components: { Display }
};
</script>
