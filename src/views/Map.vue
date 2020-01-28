<template>
    <div>
        <div class="banner">
            <h1>Map</h1>
        </div>
        <Map></Map>
    </div>
</template>

<script>
import Map from '@/components/map/map.vue';

export default {
    name: 'map-page',
    components: { Map }
};
</script>
