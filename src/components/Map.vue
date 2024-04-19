<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  trip: {
    type: Object,
    required: true,
    output: {
      type: Array,
      required: true,
    }
  }
});
</script>

<template>
    <div id="map" style="height: 125vw;"></div>
</template>
