<script setup>
import { onMounted, ref } from "vue";

const trips = ref([]);

const fetchTrips = async () => {
    const response = await fetch("http://localhost:3000/v1/trips");
    const data = await response.json();
    trips.value = data;
    console.log(data);
};

onMounted(() => {
    fetchTrips();
});
</script>

<template>
    <section>
        <div class="row">
            <h2 class="col-10 mt-4">Derniers itinéraire</h2>
            <i class="mt-4 col-2 bi bi-pencil-square h2 "></i>
        </div>
        <h3 class="h6 mt-2 mb-2">Itinéraire</h3>
        <div class="row justify-content-center">
            <ol class="list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start" v-for="trip in trips" :key="trip.id">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">{{ trip.prompt }}</div>
                        <p>le description</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
