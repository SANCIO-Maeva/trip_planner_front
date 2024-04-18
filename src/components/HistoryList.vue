<script setup>
import { onMounted, ref } from "vue";

const trips = ref([]);

const fetchTrips = async () => {
    const response = await fetch("http://localhost:3000/v1/trips");
    const data = await response.json();
    trips.value = data;
    // console.log(data);
};

onMounted(() => {
    fetchTrips();
});
</script>

<template>
    <section>
        <h2 class="h6 mt-5">Derniers itinéraire</h2>
        <div class="row justify-content-center" v-for="trip in trips" :key="trip.id">
            <div class="card col-10 mt-2">
                <div class="card-body">
                    {{ trip.prompt }}
                <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    </section>
</template>