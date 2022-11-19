<template>
    <div class="h-[235px] rounded-[4px] border border-[#CBD5E0]" ref="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
export default {
    name: 'GoogleMaps',
    props: {
        center: Object,
        zoom: Number,
        getLocation: Function,
        location: Object,
    },
    data() {
        return {
            google: null,
            marker: null,
        }
    },
    async mounted() {
        const loader = new Loader({
            apiKey: process.env.VUE_APP_GOOGLE_MAPS,
            version: "weekly",
            libraries: ["places"]
        });

        await loader.load()
            .then((google) => {
                this.google = google;
            })
            .catch(e => {
                console.log(e)
            })

        const map = new this.google.maps.Map(this.$refs['map'], {
            center: this.center,
            zoom: this.zoom
        });

        this.marker = new this.google.maps.Marker({
            position: this.location,
            map: map
        });

        const placeMarker = (map, location) => {
            if (this.marker) {
                this.marker.setPosition(location);
            } else {
                this.marker = new this.google.maps.Marker({
                    position: location,
                    map: map
                });
            }
        }

        const Location = (lat, long) => {
            this.getLocation(lat, long);
        }

        this.google.maps.event.addListener(map, 'click', function (event) {
            placeMarker(this, event.latLng);
            const lat = event.latLng.lat();
            const long = event.latLng.lng();

            Location(lat, long)
        });

    },
}
</script>