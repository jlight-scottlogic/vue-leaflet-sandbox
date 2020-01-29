<template>
    <div v-if="country != null">
        <div class="banner">
            <h1>{{country.name}}</h1>
        </div>
        <router-view />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actions } from '@/store';

export default {
    name: 'country-layout',
    data() {
        return {
            countryId: parseInt(this.$route.params.id)
        };
    },
    created() {
        this.$store.dispatch(actions.loadCountry, this.countryId);
    },
    computed: mapState({
        country: state => state.country.value
    }),
    methods: {},
    components: {}
};
</script>
