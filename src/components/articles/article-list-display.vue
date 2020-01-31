<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="empty">No Articles!</div>
        <table v-else>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <td>{{ article.id }}</td>
                    <td>{{ article.headline }}</td>
                    <td>
                        <button @click="emitEditClickedEvent(article.id)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'article-list-display',
    props: {
        articles: Array,
        loading: Boolean
    },
    computed: {
        empty() {
            return this.articles == null || this.articles.length === 0;
        }
    },
    methods: {
        emitEditClickedEvent(id) {
            this.$emit('oneditclicked', id);
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
