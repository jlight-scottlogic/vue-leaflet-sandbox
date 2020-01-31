<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="article == null">No Article data found</div>
    <div v-else>
        <Display :article="article"></Display>
    </div>
</template>

<script>
import Display from './article-details-display.vue';
import { mapState } from 'vuex';

export default {
    name: 'article-details',
    computed: mapState({
        article: state => state.article.value,
        loading: state => state.article.loading
    }),
    components: { Display }
};
</script>
