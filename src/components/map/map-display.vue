<template>
    <div id="map-container">
        <l-map
            style="height: 80%; width: 100%"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
            @click="handleClick"
        >
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng">
                <l-popup :content="item.content"></l-popup>
            </l-marker>
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
    computed: {
        markers() {
            return this.countries.map(c => ({
                id: c.id,
                latlng: { lat: c.latitude, lng: c.longitude },
                content: `<h3>${c.name}</h3>`
            }));
        }
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
        },
        handleClick(e) {
            console.log(e.latlng);
        }
    }
};
</script>

<style scoped>
#map-container {
    height: 600px;
}
</style>
