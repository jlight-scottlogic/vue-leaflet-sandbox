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
    name: 'create-country-form',
    data() {
        return {
            name: ''
        };
    },
    methods: {
        emitSaveEvent() {
            this.$emit('onsave', { name: this.name });
        }
    },
    components: {}
};
</script>

<style>
    label {
        margin-right: 0.5rem;
    }
</style>
