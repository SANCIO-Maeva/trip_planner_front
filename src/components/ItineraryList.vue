<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  trip: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <section>
        <div class="row">
            <h2 class="col-10 mt-4">{{ props.trip.prompt }}</h2>
            <i class="mt-4 col-2 bi bi-pencil-square h2 "></i>
        </div>
        <h3 class="h6 mt-2 mb-2">Itinéraire</h3>
        <div class="row justify-content-center">
            <ol class="list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start" v-for="location in props.trip.output" :key="location.id">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">{{ location.name }}</div>
                        <p>{{ location.description }}</p>
                        <p>{{ location.location }}</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
