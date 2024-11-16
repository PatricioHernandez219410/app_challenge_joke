<template>
  <div>
    <div class="w-100 ">
      <div class="text-center text-h6 text-grey-darken-5 comic-neue-bold">
        <v-icon size="large" class="mr-2">mdi mdi-dice-multiple</v-icon>Random Joke</div>
      <v-divider></v-divider>
    </div>
    <div class="mt-4">
      <cardJoke :joke="jokeStore.joke" :key="componenteKey" />
    </div>
    <v-card>
      <v-row class="pa-3 ">
        <v-col cols="12">
          <v-btn variant="tonal" color="primary" stacked block @click="getRandomJoke()">
            <v-icon size="50px">mdi-dice-multiple</v-icon>
            Get Random Joke
          </v-btn>
        </v-col>
        <v-col cols="6" md="4" lg="3" class="px-1" v-for="(type, index) in jokeStore.types" :key="index">
          <v-btn :color="getColor(index)" variant="tonal" stacked block @click="getRandomJokeByType(type)">
            <v-icon size="40px">{{getIcon(index)}}</v-icon>
            <span class="text-no-wrap">{{ type }}</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

import CardJoke from '@/components/CardJoke.vue'

import { useJokeStore } from '@/stores/joke';

const jokeStore = useJokeStore()

const componenteKey = ref(0);

const getIcon = (index) => {
  return ['mdi-emoticon-happy-outline', 'mdi-emoticon-excited-outline', 'mdi-emoticon-cool-outline', 'mdi-emoticon-happy-outline'][index]
}

const getColor = (index) => {
  return ['green', 'orange', 'blue', 'deep-purple'][index]
}

const getRandomJoke = async () => {
  await jokeStore.getRandomJoke()
}

const getRandomJokeByType = async (type) => {
  await jokeStore.getRandomJokeByType(type)
}

onMounted(async () => {
  await getRandomJoke()
})

watch(() => jokeStore.joke, () => {
  componenteKey.value++
})


</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
