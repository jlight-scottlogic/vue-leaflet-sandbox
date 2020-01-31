<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="empty">No Articles!</div>
        <table v-else>
            <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <td class="headline-cell">{{ article.headline }}</td>
                    <td>
                        <button @click="emitDetailsClickedEvent(article.id)">View</button>
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
        emitDetailsClickedEvent(id) {
            this.$emit('ondetailsclicked', id);
        }
    },
    components: {}
};
</script>

<style scoped>
table {
    margin: auto;
}
.headline-cell {
    text-align: left;
    min-width: 150px;
}
</style>
