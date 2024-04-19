<script setup>
import Map from "@/components/Map.vue"
import ItineraryList from "@/components/ItineraryList.vue"
import L from 'leaflet';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const markers = ref([]);
const route = useRoute();
const tripId = route.params.id;
const trip = ref({});

onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3000/v1/trips/${tripId}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    trip.value = await response.json();

    const map = L.map("map").setView([51, -0.09], 13);

    const key = 'B3SpToQTffPiOQxtsGkV';

    L.tileLayer(`https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=${key}`,{
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
      crossOrigin: true
    }).addTo(map);

    if (trip.value && trip.value.output) {
      for (const step of trip.value.output) {
        if (step.location) {
          const marker = L.marker([step.location.latitude, step.location.longitude]).addTo(map);
          markers.value.push(marker);
        }
      }
    }

    const group = new L.featureGroup(markers.value);
    map.fitBounds(group.getBounds());

  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
    <Map :trip="trip"/>
    <ItineraryList :trip="trip"/>
</template>
