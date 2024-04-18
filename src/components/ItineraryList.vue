<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const tripId = route.params.id;
const trip = ref({});

onMounted(async () => {
    try {
        const response = await fetch(`http://localhost:3000/v1/trips/${tripId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        trip.value = await response.json();
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <section>
        <div class="row">
            <h2 class="col-10 mt-4">{{ trip.prompt }}</h2>
            <i class="mt-4 col-2 bi bi-pencil-square h2 "></i>
        </div>
        <h3 class="h6 mt-2 mb-2">Itinéraire</h3>
        <div class="row justify-content-center">
            <ol class="list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start" v-for="location in trip.output" :key="location.id">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">{{ location.name }}</div>
                        <p>{{ location.description }}</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
