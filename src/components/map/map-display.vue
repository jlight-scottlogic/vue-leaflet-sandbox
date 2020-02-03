<template>
    <div id="map-container">
        <l-map
            ref="map"
            style="height: 100%; width: 100%"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
            @click="handleClick"
        >
            <l-tile-layer :url="url"></l-tile-layer>

            <l-marker v-for="marker in markers" :latLng="marker.latLng" :key="marker.id">
                <l-popup>{{marker.content}}</l-popup>
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
        selectedCountry: Object,
        articles: Array
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
        articles(current, previous) {
            console.log('current', current, 'previous', previous);
        },
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
            return this.articles.map(c => ({
                id: c.id,
                latLng: { lat: c.latitude, lng: c.longitude },
                content: `<h3>${c.headline}</h3>`
            }));
        },
        highlightedCountry() {
            if (this.selectedCountry) {
                return this.findCountry(this.selectedCountry.code);
            }
            return null;
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
