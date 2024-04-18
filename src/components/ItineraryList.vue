<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from 'vue-router';

const data = ref(null);
const route = useRoute();
const tripId = route.params.id;

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/v1/trips');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        data.value = await response.json();
    } catch (error) {
        console.error(error);
    }
});

const trip = computed(() => (data.value ? data.value.find(item => item.id === tripId) : null));

</script>

<template>
    <section>
        <div class="row">
            <h2 class="col-10 mt-4" v-if="trip">{{ trip.prompt }}</h2>
            <i class="mt-4 col-2 bi bi-pencil-square h2 "></i>
        </div>
        <h3 class="h6 mt-2 mb-2">Itinéraire</h3>
        <div class="row justify-content-center">
            <ol class="list-group-numbered">
                <li class="list-group-item d-flex justify-content-between align-items-start" v-for="trip in trips" :key="trip.id">
                    <div class="ms-2 me-auto" v-for="item in filteredData.output" :key="item.name">
                        <div class="fw-bold">{{ item.name }}</div>
                        <p>{{ item.description }}</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
