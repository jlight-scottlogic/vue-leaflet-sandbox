<template>
    <div class="form">
        <div class="form-group">
            <div class="label-container">
                <label>Name:</label>
            </div>
            <div class="input-container">
                <input v-model="name" />
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
        <div>
            <button @click="emitSaveEvent" :disabled="saving">{{ saving ? 'Saving...' : 'Save' }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'country-form',
    props: {
        country: Object,
        saving: Boolean
    },
    data() {
        return {
            name: null,
            latitude: null,
            longitude: null
        };
    },
    beforeMount() {
        if (this.country) {
            this.name = this.country.name;
        }
    },
    methods: {
        emitSaveEvent() {
            this.$emit('onsave', {
                ...this.country,
                name: this.name,
                latitude: this.latitude,
                longitude: this.longitude
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
