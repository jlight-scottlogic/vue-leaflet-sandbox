<template>
    <div class="article-details-wrapper">
        <Display :article="article" :loading="loading"></Display>
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

<style scoped>
.article-details-wrapper {
    text-align: center;
}
</style>
