<template>
    <div v-if="article != null">
        <div class="banner">
            <h1>{{article.headline}}</h1>
        </div>
        <router-view />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actions } from '@/store';

export default {
    name: 'article-layout',
    data() {
        return {
            articleId: parseInt(this.$route.params.id)
        };
    },
    created() {
        this.$store.dispatch(actions.loadArticle, this.articleId);
    },
    computed: mapState({
        article: state => state.article.value
    }),
    methods: {},
    components: {}
};
</script>
