<template>
  <v-card>
    <v-row class="pa-3 ">
      <v-col cols="12">
        <v-btn variant="tonal" color="red" stacked block @click="pushFavorite">
          <v-icon size="50px">mdi-heart-outline</v-icon>
          display my {{ jokeStore.favorites.length != 0 && jokeStore.favorites.length || '' }} favorites
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class=" d-flex justify-center  text-center text-green">
          <div class=" d-flex align-content-start mx-1">
            <span style="font-size: 3rem;" class=" font-weight-regular" >
              {{ jokeStore.likes }}
            </span>
          </div>
          <div class="pt-2">
            <v-icon size="48px" class=" d-block mx-auto" >mdi-thumb-up-outline</v-icon>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class=" d-flex justify-center text-center text-red">
          <div class=" d-flex align-content-start mx-1">
            <span style="font-size: 3rem;" class=" font-weight-regular" >
              {{ jokeStore.dislikes }}
            </span>
          </div>
          <div class="pt-2">
            <v-icon size="48px" class=" d-block mx-auto" >mdi-thumb-down-outline</v-icon>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useJokeStore } from '@/stores/joke';

const jokeStore = useJokeStore()

const props = defineProps({
  joke: Object
})

const router = useRouter()

const pushFavorite = () => router.push({ name: 'favorites' })

</script>

<style scoped></style>