import type { get } from 'node_modules/axios/index.cjs';
import Api, { errorHandler } from './ApiService';

const resource = 'jokes';

export default {
    getJokesAmount(amount: number) {
        return Api().get(`${resource}/random/${amount}`)
    },
    getJokesFromType(type: string) {
        return Api().get(`${resource}/${type}`)
    },
    getTenFromType(type: string) {
        return Api().get(`${resource}/${type}/ten`)
    },
    getRandomJokeByType(type: string) {
        return Api().get(`${resource}/${type}/random`)
    },
    getTypes() {
        return Api().get(`types`)
    },
    getRandomJoke() {
        return Api().get(`random_joke`)
    },
    getRandomTenJokes() {
        return Api().get(`${resource}/random_ten`)
    },
    getRandomJokes() {
        return Api().get(`${resource}/random`)
    },
}