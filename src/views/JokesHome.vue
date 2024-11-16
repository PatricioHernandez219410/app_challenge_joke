<template>
  <v-container>
    <v-row>
      <v-col cols="12"  class=" text-h5  text-md-h4 text-center  text-grey-darken-5 comic-neue-bold">
        <div class=" float-left">
          <v-img :src="`${env.BASE_URL}logo.png`" width="100" max-width="100"></v-img>
        </div>
        <v-col class=" items-center h-100" >
          Welcome to the funniest
          joke
          page!
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <one-joke />
        <card-favorite />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" md="6">
        <infinitite-joke />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import InfinititeJoke from '@/components/InfinititeJoke.vue';
import OneJoke from '@/components/OneJoke.vue';
import CardFavorite from '@/components/CardFavorite.vue';

const env = import.meta.env;

</script>
