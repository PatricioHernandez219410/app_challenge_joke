<template>
  <v-card class="mx-auto">
    <v-card-title class="headline">Joke of the day</v-card-title>

    <v-card-text>
      <div>{{ joke.setup }}</div>
      <v-divider class="my-3"></v-divider>
      <div>{{ joke.punchline }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green" @click="addLike()" icon>
        <v-icon>{{ joke.likes > 0 && 'mdi-thumb-up' || 'mdi-thumb-up-outline' }}</v-icon>
      </v-btn>
      <v-btn color="red" @click="addDislike()" icon>
        <v-icon> {{ joke.likes < 0 && 'mdi-thumb-down' || 'mdi-thumb-down-outline' }}</v-icon> 
      </v-btn>
      <v-btn color="red" @click="addFavorite()" icon>
        <v-icon>{{ joke.favorite && 'mdi-heart' || 'mdi-heart-outline'}}</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-chip variant="outlined" class="mr-2">
        {{ joke.type }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  joke: Object
})

const addLike = () => {
  if (props.joke.likes === undefined) {
    props.joke.likes = 0
  }
  props.joke.likes = 1
}

const addDislike = () => {
  if (props.joke.likes === undefined) {
    props.joke.likes = 0
  }
  props.joke.likes = -1
}

const addFavorite = () => {
  if (props.joke.favorite === undefined) {
    props.joke.favorite = false
  }
  props.joke.favorite = !props.joke.favorite
}

</script>

<style scoped>

</style>