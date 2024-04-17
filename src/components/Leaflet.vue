<script setup>
import { ref, onMounted } from 'vue';
import L from "leaflet";

onMounted(() => {
  const map = L.map('map', {
  center: L.latLng(55.665957, 12.550343),
  zoom: 10,
});

  const key = 'B3SpToQTffPiOQxtsGkV';

  L.tileLayer(`https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=${key}`,{
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
  }).addTo(map);
  L.marker([55.665957, 12.550343]).addTo(map);
});
</script>

<template>
    <div id="map" style="height: 125vw;"></div>
</template>