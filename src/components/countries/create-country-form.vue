<template>
    <div>
        <Display @onsave="save"></Display>
    </div>
</template>

<script>
import Display from './create-country-form-display.vue';
import * as client from '../../client/fake-client';

export default {
    name: 'create-country-form',
    methods: {
        async save(country) {
            await client.post('countries', country);
            this.$router.push('/countries');
        }
    },
    components: { Display }
};
</script>
