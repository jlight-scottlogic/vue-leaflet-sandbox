<template>
    <List
        v-if="mode == modes.list"
        :selectedCountry="selectedCountry"
        @articleselected="handleArticleSelected"
    />
    <Details
        v-else-if="mode == modes.details"
        :articleId="articleId"
        @backclicked="handleBackClicked"
    />
</template>

<script>
import Details from './map-article-details';
import List from './map-articles';

const modes = {
    list: 1,
    details: 2
};

export default {
    name: 'map-articles',
    props: {
        selectedCountry: Object
    },
    data: function() {
        return {
            modes,
            mode: modes.list,
            articleId: null
        };
    },
    methods: {
        handleArticleSelected(id) {
            this.mode = modes.details;
            this.articleId = id;
        },
        handleBackClicked() {
            this.mode = modes.list;
            this.articleId = null;
        }
    },
    components: { Details, List }
};
</script>
