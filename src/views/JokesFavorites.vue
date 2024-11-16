<template>

    <v-container>
        <v-row>
            <v-col cols="12">
                <div class=" float-left">
                    <v-btn variant="tonal" @click="pushHome()">
                        <v-icon size="20px"> mdi-arrow-left </v-icon>
                    </v-btn>
                </div>
                <div>
                    <div class="mb-10 text-h3 text-center text-grey-darken-5 comic-neue-bold">Favorites jokes page!
                    </div>
                </div>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col cols="12" sm="6" lg="3" v-for="itemCounter in valuesCounterCard ">
                        <CounterCard :item="itemCounter" />
                    </v-col>
                </v-row>
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
import { computed, ref } from 'vue'
import CardJoke from '@/components/CardJoke.vue';
import { useJokeStore } from '@/stores/joke';
import { useRouter } from 'vue-router';
import CounterCard from '@/components/CounterCard.vue';

const router = useRouter();

const jokeStore = useJokeStore();

const search = ref('')

const pushHome = () => router.push({ name: 'home' })

const valuesCounterCard = computed(() => [
    {
        icon: 'mdi-emoticon-happy-outline',
        title: 'Total jokes',
        value: jokeStore.jokes.length,
        color: 'text-info'
    },
    {
        icon: 'mdi-heart-outline',
        title: 'Total favorite jokes',
        value: jokeStore.favorites.length,
        color: 'text-orange'
    },
    {
        icon: 'mdi-thumb-up-outline',
        title: 'Total likes jokes',
        value: jokeStore.likes,
        color: 'text-green'
    },
    {
        icon: 'mdi-thumb-down-outline',
        title: 'Total dislike jokes',
        value: jokeStore.dislikes,
        color: 'text-red'
    }
])


</script>

<style></style>
