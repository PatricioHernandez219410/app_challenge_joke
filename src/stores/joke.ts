import JokeService from '@/services/JokeService';
import type { RequestError } from '../services/ApiService';
import { defineStore } from 'pinia';

export const useJokeStore = defineStore({
    id: 'joke',
    state: () => {
        const jokes: Joke[] = [];
        const types: string[] = [];
        const joke: Joke | null = null;
        return { jokes, types, joke };
    },
    persist: {
        omit: ['joke'],
    },
    actions: {
        getTypes: async function() {
            if (this.types.length) return;
            const response = await JokeService.getTypes();
            if (response.data) {
                this.types = response.data;
            }
        },
        getJokesAmount: async function(amount: number) {
            const response = await JokeService.getJokesAmount(amount);
            if (response.data){
                this.jokes.push(...response.data);
            }
        },
        getRandomJoke: async function () {
            if (this.joke){
                this.jokes.push({...this.joke});
                this.joke = null;
            }
            const response = await JokeService.getRandomJoke();
            this.joke = response.data || null;
        },
        getRandomJokeByType: async function (type: string) {
            if (this.joke){
                this.jokes.push({...this.joke});
                this.joke = null;
            }
            const response = await JokeService.getRandomJokeByType(type);
            this.joke = response.data[0] || null;
        },
    },
    getters: {
        favorites: (state) => {
            return state.jokes.filter(joke => joke.favorite).concat(state.joke && state.joke.favorite ? [state.joke] : []);
        },
        likes: (state) => {
            return state.jokes.filter(joke => joke.likes == 1).reduce((acc, joke) => acc + 1, 0) + (state.joke ? (state.joke.likes == 1 && 1 || 0) : 0);
        },
        dislikes: (state) => {
            return state.jokes.filter(joke => joke.likes == -1).reduce((acc, joke) => acc + 1, 0) + (state.joke ? (state.joke.likes == -1 && 1 || 0) : 0);
        }

    }
})

interface Joke {   
    id: number;
    type: string;
    setup: string;
    punchline: string;
    likes: number;
    favorite: boolean;
}

