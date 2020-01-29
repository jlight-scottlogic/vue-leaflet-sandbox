<template>
    <div>
        <div class="banner">
            <h1>Create Country</h1>
        </div>
        <Form></Form>
    </div>
</template>

<script>
import Form from '@/components/countries/create-country-form.vue';

export default {
    name: 'create-country',
    methods: {},
    components: { Form }
};
</script>
