<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-else>
            <div class="banner">
                <h1>{{country.name}}</h1>
            </div>
            <router-view />
        </div>
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
        loading: state => state.country.loading,
        country: state => state.country.value
    }),
    methods: {},
    components: {}
};
</script>
