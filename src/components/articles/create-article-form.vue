<template>
    <div>
        <Display @onsave="save" :saving="saving" :countries="countries"></Display>
    </div>
</template>

<script>
import Display from './article-form.vue';
import { actions } from '@/store';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    name: 'create-article-form',
    data: function() {
        return {
            countries: []
        };
    },
    async created() {
        const result = await axios.get(
            'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code'
        );
        this.countries = result.data;
    },
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
