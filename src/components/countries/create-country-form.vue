<template>
    <div>
        <Display @onsave="save" :saving="saving"></Display>
    </div>
</template>

<script>
import Display from './country-form.vue';
import { actions } from '@/store';
import { mapState } from 'vuex';

export default {
    name: 'create-country-form',
    methods: {
        async save(country) {
            await this.$store.dispatch(actions.saveNewCountry, country);
            this.$router.push('/countries');
        }
    },
    computed: mapState({
        saving: state => state.country.saving
    }),
    components: { Display }
};
</script>
