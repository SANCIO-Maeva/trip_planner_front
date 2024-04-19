<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const trips = ref([]);
let tripId = null;


const fetchTrips = async () => {
    const response = await fetch("http://localhost:3000/v1/trips");
    const data = await response.json();
    trips.value = data;
    tripId = data.id;
};

const redirection = async (tripId) => {
    router.push({ name: 'about', params: { id: tripId } });
}

onMounted(() => {
    fetchTrips();
});
</script>

<template>
        <h3 class="h6 mt-5">Derniers itinéraire</h3>
        <div class="row justify-content-center" v-for="trip in trips" :key="trip.id">
            <div class="card col-10 mt-2" @click="redirection(trip.id)">
                <div class="card-body">
                    {{ trip.prompt }}
                <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
</template>