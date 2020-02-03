<template>
    <div id="map-article-list">
        <h3>Articles</h3>
        <Display
            :articles="articles"
            :loading="articlesLoading"
            @listitemclicked="handleListItemClicked"
            @linkclicked="handleLinkClicked"
        ></Display>
    </div>
</template>

<script>
import Display from '../articles/article-list-display.vue';
import { mutations } from '@/store';

export default {
    name: 'map-articles',
    props: {
        articles: Array,
        articlesLoading: Boolean
    },
    methods: {
        handleListItemClicked(id) {
            this.$emit('articleselected', id);
        },
        handleLinkClicked(link) {
            this.$store.commit(mutations.setSelectedCountry, link);
        }
    },
    components: { Display }
};
</script>
