<template>
    <div>
        <div>
            <label>Name:</label>
            <input v-model="name" />
        </div>
        <br />
        <div>
            <button @click="emitSaveEvent">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'country-form',
    props: {
        country: Object
    },
    data() {
        return {
            name: ''
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
                name: this.name
            });
        }
    },
    components: {}
};
</script>

<style scoped>
    label {
        margin-right: 0.5rem;
    }
</style>
