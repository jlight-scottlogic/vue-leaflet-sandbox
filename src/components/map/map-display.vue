<template>
    <div id="map-container">
        <l-map
            ref="map"
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

            <l-geo-json
                ref="geoLayer"
                v-if="highlightedCountry != null"
                :geojson="highlightedCountry"
                @ready="fitBounds()"
            ></l-geo-json>
        </l-map>
    </div>
</template>

<script>
import geojson from '@/data/geojson';

export default {
    name: 'map-component',
    props: {
        countries: Array,
        selectedCountry: Object
    },
    data() {
        return {
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 3,
            center: [47.41322, -1.219482],
            bounds: null,
            layer: {
                geojson
            },
            previousSelectedCountry: null
        };
    },
    watch: {
        selectedCountry(_, previous) {
            this.previousSelectedCountry = previous;
        }
    },
    updated() {
        if (
            this.selectedCountry &&
            this.previousSelectedCountry &&
            this.selectedCountry.code !== this.previousSelectedCountry.code
        ) {
            this.previousSelectedCountry = this.selectedCountry;
            this.fitBounds();
        }
    },
    computed: {
        markers() {
            return this.countries.map(c => ({
                id: c.id,
                latlng: { lat: c.latitude, lng: c.longitude },
                content: `<h3>${c.name}</h3>`
            }));
        },
        highlightedCountry() {
            return this.findCountry(this.selectedCountry.code);
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
        findCountry(name) {
            return (
                this.layer.geojson.features.find(
                    f => f.properties.ISO_A3 === name
                ) || null
            );
        },
        handleClick(e) {
            this.$emit('mapclicked', { latlng: e.latlng });
        },
        fitBounds() {
            this.$refs.map.mapObject.fitBounds(this.$refs.geoLayer.getBounds());
        }
    }
};
</script>

<style scoped>
#map-container {
    height: 600px;
}
</style>
