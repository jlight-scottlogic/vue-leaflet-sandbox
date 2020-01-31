<template>
    <div>
        <div class="banner">
            <h1>Create Article</h1>
        </div>
        <Form></Form>
    </div>
</template>

<script>
import Form from '@/components/articles/create-article-form.vue';

export default {
    name: 'create-article',
    methods: {},
    components: { Form }
};
</script>
