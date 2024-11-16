<template>
  <div style="">
    <div class="w-100">
      <div class="text-center text-h6 text-grey-darken-5 comic-neue-bold">
        <v-icon size="large" class="mr-2">mdi mdi-all-inclusive</v-icon>Infinite Jokes Scroll</div>
      <v-divider></v-divider>
    </div>
    <v-infinite-scroll :height="'80vh'" :items="jokeStore.jokes" :onLoad="load">
      <template v-for="(item, index) in jokeStore.jokes" :key="item">
        <div>
          <CardJoke :joke="item" />
        </div>
      </template>
    </v-infinite-scroll>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardJoke from './CardJoke.vue';

import { useJokeStore } from '@/stores/joke';

let jokeStore = useJokeStore()

const setJokesInItems = async () => {
  await jokeStore.getJokesAmount(3)
}

onMounted(async () => {
  if (jokeStore.jokes.length) return
  await setJokesInItems()
})

const load = async ({ done }) => {
  await setJokesInItems()
  done('ok')
}
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
