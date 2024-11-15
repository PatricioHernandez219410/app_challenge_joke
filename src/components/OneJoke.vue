<template>
  <div>
    <div class="w-100 ">
      <h3 class="text-center">Random Joke</h3>
    </div>
    <div class="mt-4">
      <cardJoke v-if="jokeStore.joke" :joke="jokeStore.joke" />
    </div>
    <v-card>
      <v-row class="pa-3 ">
        <v-col cols="12">
          <v-btn variant="tonal" color="primary" stacked block @click="getRandomJoke()">
            <v-icon size="50px">mdi-all-inclusive</v-icon>
            Any Type
          </v-btn>
        </v-col>
        <v-col cols="6" md="4" lg="3" class="px-1" v-for="(type, index) in jokeStore.types" :key="index">
          <v-btn :color="getRandomColor()" variant="tonal" stacked block @click="getRandomJokeByType(type)">
            <v-icon size="40px">{{getRandomIcon()}}</v-icon>
            <span class="text-no-wrap">{{ type }}</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import CardJoke from '@/components/CardJoke.vue'

import { useJokeStore } from '@/stores/joke';

const jokeStore = useJokeStore()

const colors = ref(['green', 'red', 'blue', 'yellow', 'purple', 'pink', 'orange', 'indigo', 'teal', 'cyan', 'lime', 'amber', 'deep-purple', 'deep-orange', 'light-blue', 'light-green', 'blue-grey', 'brown', 'grey', 'black'])

const icons = ref(['mdi-emoticon-happy-outline', 'mdi-emoticon-excited-outline', 'mdi-emoticon-sad-outline', 'mdi-emoticon-neutral-outline', 'mdi-emoticon-kiss-outline', 'mdi-emoticon-devil-outline', 'mdi-emoticon-cool-outline', 'mdi-emoticon-confused-outline', 'mdi-emoticon-cry-outline', 'mdi-emoticon-dead-outline', 'mdi-emoticon-excited-outline', 'mdi-emoticon-frown-outline', 'mdi-emoticon-happy-outline', 'mdi-emoticon-kiss-outline', 'mdi-emoticon-lol-outline', 'mdi-emoticon-neutral-outline', 'mdi-emoticon-outline', 'mdi-emoticon-poop-outline', 'mdi-emoticon-sad-outline', 'mdi-emoticon-tongue'])

const getRandomIcon = () => {
  const index = Math.floor(Math.random() * icons.value.length)
  return icons.value[index]
}

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.value.length)
  return colors.value[index]
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


</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
