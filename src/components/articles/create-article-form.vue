<template>
    <div>
        <Display @onsave="save" :saving="saving"></Display>
    </div>
</template>

<script>
import Display from './article-form.vue';
import { actions } from '@/store';
import { mapState } from 'vuex';

export default {
    name: 'create-article-form',
    methods: {
        async save(article) {
            await this.$store.dispatch(actions.saveNewArticle, article);
            this.$router.push('/articles');
        }
    },
    computed: mapState({
        saving: state => state.article.saving
    }),
    components: { Display }
};
</script>
