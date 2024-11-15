<template>
  <v-card>
    <v-row class="pa-3 ">
      <v-col cols="12">
        <v-btn variant="tonal" color="red" stacked block @click="pushFavorite">
          <v-icon size="50px">mdi-heart-outline</v-icon>
          favorites {{ jokeStore.favorites.length }}
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class=" d-block text-center text-green">
          <v-icon size="50px" class=" d-block mx-auto" >mdi-thumb-up-outline</v-icon>
          likes {{ jokeStore.likes }}
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet rounded class=" d-block text-center text-red">
          <v-icon size="50px" class=" d-block mx-auto" >mdi-thumb-down-outline</v-icon>
          dislike {{ jokeStore.dislikes }}
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