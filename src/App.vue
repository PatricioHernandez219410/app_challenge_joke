<template>
  <v-app>
    <v-main class=" bg-grey-lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import { useJokeStore } from '@/stores/joke'

let jokeStore = useJokeStore()

onMounted(async () => {
  await jokeStore.getTypes()
})

</script>

<style>

@import url("https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css");

@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&disgetTypesy=swap');

.comic-neue-light {
  font-family: "Comic Neue", cursive;
  font-weight: 300;
  font-style: normal;
}

.comic-neue-regular {
  font-family: "Comic Neue", cursive;
  font-weight: 400;
  font-style: normal;
}

.comic-neue-bold {
  font-family: "Comic Neue", cursive;
  font-weight: 700;
  font-style: normal;
}

.comic-neue-light-italic {
  font-family: "Comic Neue", cursive;
  font-weight: 300;
  font-style: italic;
}

.comic-neue-regular-italic {
  font-family: "Comic Neue", cursive;
  font-weight: 400;
  font-style: italic;
}

.comic-neue-bold-italic {
  font-family: "Comic Neue", cursive;
  font-weight: 700;
  font-style: italic;
}

.main-color {
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
}
</style>
