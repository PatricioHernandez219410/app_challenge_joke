<template>

    <v-container>
        <v-row>
            <v-col cols="12">
                <div class=" float-left ">
                    <v-btn variant="tonal" stacked @click="pushHome()">
                        <v-icon size="35px"> mdi-arrow-left </v-icon>
                    </v-btn>
                </div>
                <div>
                    <h1 class="mb-10 text-h3 text-center text-grey-darken-5 comic-neue-bold">Favorites jokes page!
                    </h1>
                </div>
            </v-col>
            <v-col cols="12">
                <v-data-iterator :items="jokeStore.favorites" :items-per-page="6" :search="search" :height="'80vh'">
                    <template v-slot:header>
                        <v-row>
                            <v-col cols="12">
                                <v-toolbar class="px-2">
                                    <v-text-field v-model="search" density="comfortable"
                                        placeholder="Search jokes for setup" prepend-inner-icon="mdi-magnify"
                                        variant="tonal" clearable hide-details>
                                    </v-text-field>
                                </v-toolbar>
                            </v-col>
                            <v-col cols="6" lg="3">
                                <v-sheet rounded elevation="1" class="d-block text-center text-info">
                                    <v-icon size="50px" class=" d-block mx-auto">mdi-face-outline</v-icon>
                                    Total jokes: {{ jokeStore.jokes.length}}
                                </v-sheet>
                            </v-col>
                            <v-col cols="6" lg="3">
                                <v-sheet rounded elevation="1" class="d-block text-center text-warning">
                                    <v-icon size="50px" class=" d-block mx-auto">mdi-heart-outline</v-icon>
                                    Total favorite jokes: {{ jokeStore.favorites.length }}
                                </v-sheet>
                            </v-col>
                            <v-col cols="6" lg="3">
                                <v-sheet rounded elevation="1" class="d-block text-center text-green">
                                    <v-icon size="50px" class=" d-block mx-auto">mdi-thumb-up-outline</v-icon>
                                    Total likes jokes: {{ jokeStore.likes }}
                                </v-sheet>
                            </v-col>
                            <v-col cols="6" lg="3">
                                <v-sheet rounded elevation="1" class="d-block text-center text-red">
                                    <v-icon size="50px" class=" d-block mx-auto">mdi-thumb-down-outline</v-icon>
                                    Total dislike jokes: {{ jokeStore.dislikes }}
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </template>

                    <template v-slot:default="{ items }">
                        <v-container class="pa-2">
                            <v-row>
                                <v-col v-for="item in items" :key="item.raw.setup" cols="12" md="6">
                                    <CardJoke :joke="item.raw" />
                                </v-col>
                            </v-row>
                        </v-container>
                    </template>

                    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                        <div class="d-flex align-center justify-center pa-4">
                            <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal"
                                rounded @click="prevPage"></v-btn>

                            <div class="mx-2 text-caption">
                                Page {{ page }} of {{ pageCount }}
                            </div>

                            <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right"
                                variant="tonal" rounded @click="nextPage"></v-btn>
                        </div>
                    </template>
                </v-data-iterator>
            </v-col>



        </v-row>
    </v-container>

</template>

<script setup>
import { ref } from 'vue'

import CardJoke from '@/components/CardJoke.vue';

import { useJokeStore } from '@/stores/joke';

import { useRouter } from 'vue-router';

const router = useRouter();

const jokeStore = useJokeStore();

const search = ref('')

const pushHome = () => router.push({ name: 'home' })

</script>

<style></style>
