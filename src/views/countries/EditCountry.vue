<template>
    <div>
        <h1>Edit Country</h1>
        <Form :countryId="countryId"></Form>
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
