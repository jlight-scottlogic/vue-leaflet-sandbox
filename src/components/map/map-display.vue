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
        selectedCountries: Array
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
            previousSelectedCountries: null
        };
    },
    watch: {
        selectedCountries(_, previous) {
            this.previousSelectedCountries = previous;
        }
    },
    updated() {
        if (
            this.selectedCountries &&
            this.previousSelectedCountries &&
            this.selectedCountries !== this.previousSelectedCountries
        ) {
            this.previousSelectedCountries = this.selectedCountries;
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
            return this.findCountries();
            // if (this.selectedCountry) {
            //     return this.findCountry(this.selectedCountry.code);
            // }
            // return null;
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
        findCountries() {
            return ({
                ...this.layer.geojson,
                features: this.layer.geojson.features.filter(f => {
                    return this.selectedCountries.map(c => c.code).includes(f.properties.ISO_A3)
                })
            });
        },
        handleClick(e) {
            if (e.originalEvent.ctrlKey) this.$emit('mapclickedCtrl', { latlng: e.latlng });
            else this.$emit('mapclicked', { latlng: e.latlng })
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
