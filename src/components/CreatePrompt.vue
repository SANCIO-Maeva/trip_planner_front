<script setup>
import { ref } from "vue";
import tripInstance from "@/services/trip.js";
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(true);
const trips = ref({
    prompt: "",
    output: "",
    createdAt: "",
    updatedAt: "",
});


const createPrompt =async () => {
    console.log(trips.value);
    isLoading.value = true; 

  let data = await tripInstance.create(
    trips.value.prompt,
    trips.value.output,
    trips.value.createdAt,
    trips.value.updatedAt,
  );
  trips.value = data;
  const tripId = data.id;
  console.log(tripId)
  router.push({ name: 'about', params: { id: tripId } });
  isLoading.value = false; 

}

</script>


<template>
    <div v-if="isLoading" class="semipolar-spinner-container">
        <div class="semipolar-spinner">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
        <div class="spinner-text">Chargement...</div>
    </div>
    <div class="row justify-content-center text-center mt-4">
        <div class="col-6">
            <img class="logo mb-3" src="../assets/Frame.svg" alt="compass">
            <h1>Planificateur de voyage</h1>
            <h2 class="h6 mb-4">généré par IA</h2>
        </div>
        <div class="col-8">
            <div class="mb-2">
                <textarea rows="5" v-model="trips.prompt"></textarea>
            </div>
            <div class="mt-5 text-center">
                <button type="button" class="btn btn-secondary btn-sm" @click="createPrompt">C'est parti</button>
                <button type="button" class="btn btn-outline-secondary btn-sm">Voir un exemple</button>
            </div>
        </div>
    </div>
</template>