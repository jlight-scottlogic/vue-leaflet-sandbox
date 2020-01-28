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
import { actions } from '../../store';

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
        loading: state => state.loading,
        country: state => state.country
    }),
    methods: {},
    components: {}
};
</script>

<style scoped>
.banner {
    width: 100%;
    background-color: #42b983;
    padding: 0.5rem 0;
}
</style>
