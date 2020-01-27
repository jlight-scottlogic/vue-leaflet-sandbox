<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="empty">No Countries!</div>
        <table v-else>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="country in countries" :key="country.id">
                    <td>{{ country.id }}</td>
                    <td>{{ country.name }}</td>
                    <td>
                        <button @click="edit(country.id)">Edit</button>
                    </td>
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
    computed: {
        empty() {
            return this.countries == null || this.countries.length === 0;
        }
    },
    methods: {
        edit(id) {
            this.$router.push(`/countries/${id}/edit`);
        }
    },
    components: {}
};
</script>

<style scoped>
table {
    margin: auto;
}
</style>
