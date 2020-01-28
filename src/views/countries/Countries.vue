<template>
    <div>
        <div class="banner">
            <h1>Countries</h1>
        </div>
        <CountriesList></CountriesList>
        <br />
        <button @click="navigateToAddPage">Add</button>
    </div>
</template>

<script>
import CountriesList from '@/components/countries/country-list.vue';

export default {
    name: 'countries',
    methods: {
        navigateToAddPage() {
            this.$router.push('countries/create');
        }
    },
    components: { CountriesList }
};
</script>
