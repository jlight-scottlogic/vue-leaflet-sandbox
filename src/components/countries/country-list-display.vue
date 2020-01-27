<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="empty">No Countries!</div>
        <table v-else>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="country in countries" :key="country.id">
                    <td>{{ country.id }}</td>
                    <td>{{ country.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'country-list-display',
    props: {
        countries: Array,
        loading: Boolean
    },
    components: {},
    computed: {
        empty() {
            return this.countries == null || this.countries.length === 0;
        }
    }
};
</script>

<style>
table {
    margin: auto;
}
</style>
