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
        <div class="form-group">
            <div class="label-container">
                <label>Body:</label>
            </div>
            <div class="input-container">
                <textarea v-model="body" rows="4" />
            </div>
        </div>
        <div class="form-group">
            <div class="label-container">
                <label>Latitude:</label>
            </div>
            <div class="input-container">
                <input v-model="latitude" />
            </div>
        </div>
        <div class="form-group">
            <div class="label-container">
                <label>Longitude:</label>
            </div>
            <div class="input-container">
                <input v-model="longitude" />
            </div>
        </div>
        <div class="form-group">
            <div class="label-container">
                <label>Links:</label>
            </div>
            <div class="input-container">
                <multiselect
                    v-model="links"
                    track-by="alpha3Code"
                    label="name"
                    :options="countries"
                    :multiple="true"
                ></multiselect>
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
        saving: Boolean,
        countries: Array
    },
    data() {
        return {
            headline: null,
            body: null,
            latitude: null,
            longitude: null,
            links: null
        };
    },
    created() {
        if (this.article) {
            this.headline = this.article.headline;
        }
    },
    methods: {
        emitSaveEvent() {
            this.$emit('onsave', {
                ...this.article,
                headline: this.headline,
                body: this.body,
                latitude: this.latitude,
                longitude: this.longitude,
                links: this.links.map(l => ({
                    name: l.name,
                    code: l.alpha3Code
                }))
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
.input-container > input,
.input-container > textarea {
    width: 100%;
    min-height: 1.5rem;
}
.label-container {
    vertical-align: top;
    text-align: right;
    display: inline-block;
    width: 50%;
}
</style>
