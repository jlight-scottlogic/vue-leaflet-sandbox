<template>
    <div class="form">
        <div class="form-group">
            <div class="label-container">
                <label>Headline:</label>
            </div>
            <div class="input-container">
                <input v-model="headline" />
            </div>
        </div>
        <div>
            <button @click="emitSaveEvent" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
        </div>
    </div>
</template>

<script>
export default {
    headline: 'article-form',
    props: {
        article: Object,
        saving: Boolean
    },
    data() {
        return {
            headline: null
        };
    },
    beforeMount() {
        if (this.article) {
            this.headline = this.article.headline;
        }
    },
    methods: {
        emitSaveEvent() {
            this.$emit('onsave', {
                ...this.article,
                headline: this.headline
            });
        }
    },
    components: {}
};
</script>

<style scoped>
label {
    margin-right: 0.5rem;
    text-align: left;
}
.form {
    padding: 0 25%;
}
.form-group {
    margin-bottom: 1rem;
}
.input-container {
    display: inline-block;
    width: 50%;
}
.label-container {
    text-align: right;
    display: inline-block;
    width: 50%;
}
</style>
