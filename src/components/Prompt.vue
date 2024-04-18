<script setup>
import { ref } from "vue";
import tripsInstance from "@/services/trip.js";

const trips = ref({
    prompt: "",
    output: "",
    createdAt: "",
    updatedAt: "",
});

async function createPrompt() {
  console.log(trips.value);

  let data = await tripsInstance.create(
    trips.value.prompt,
    trips.value.output,
    trips.value.createdAt,
    trips.value.updatedAt,
  );
}
</script>


<template>
    <div class="row justify-content-center text-center mt-4">
        <div class="col-6">
            <img class="logo mb-3" src="../assets/Frame.svg" alt="compass">
            <h1>Planificateur de voyage</h1>
            <h2 class="h6 mb-4">généré par IA</h2>
        </div>
        <div class="col-8">
            <div class="mb-2">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="trips.prompt"></textarea>
            </div>
            <div class="mt-5 text-center">
                <button type="button" class="btn btn-secondary btn-sm" @click="createPrompt">C'est parti</button>
                <button type="button" class="btn btn-outline-secondary btn-sm">Voir un exemple</button>
            </div>
        </div>
    </div>
</template>