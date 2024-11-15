<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-10 text-h3 text-center text-grey-darken-5 comic-neue-bold">Welcome to the funniest joke page!</h1>
      </v-col>
      <v-col cols="12" md="6">
        <one-joke />
        <card-favorite />
      </v-col>
      <v-col cols="12" md="6">
        <infinitite-joke />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineComponent } from 'vue';
import InfinititeJoke from '@/components/InfinititeJoke.vue';
import OneJoke from '@/components/OneJoke.vue';
import CardFavorite from '@/components/CardFavorite.vue';
</script>
