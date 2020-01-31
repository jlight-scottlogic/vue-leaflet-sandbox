<template>
    <div>
        <h2>Edit Country</h2>
        <Form></Form>
    </div>
</template>

<script>
import Form from '@/components/countries/edit-country-form.vue';

export default {
    name: 'edit-country',
    data() {
        return {
            countryId: parseInt(this.$route.params.id)
        };
    },
    methods: {},
    components: { Form }
};
</script>
