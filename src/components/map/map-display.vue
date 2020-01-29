<template>
    <div id="map-container">
        <l-map
            style="height: 80%; width: 100%"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
        >
            <l-tile-layer :url="url"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
export default {
    name: 'map-component',
    props: {
        countries: Array
    },
    data() {
        return {
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 3,
            center: [47.41322, -1.219482],
            bounds: null
        };
    },
    methods: {
        zoomUpdated(zoom) {
            this.zoom = zoom;
        },
        centerUpdated(center) {
            this.center = center;
        },
        boundsUpdated(bounds) {
            this.bounds = bounds;
        }
    }
};
</script>

<style scoped>
#map-container {
    height: 600px;
}
</style>
